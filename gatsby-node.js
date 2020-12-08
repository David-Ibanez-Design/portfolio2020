/* Vendor imports */
const path = require('path');
/* App imports */
const config = require('./gatsby-config');
const locales = require(`./config/i18n`)
const Utils = require('./src/utils');

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/
  deletePage(page)

  // Grab the keys ('en' & 'de') of locales and map over them

  Object.keys(locales).map(lang => {
    // Use the values defined in "locales" to construct the path
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}${page.path}`


    return createPage({
      // Pass on everything from the original page
      ...page,
      // Since page.path returns with a trailing slash (e.g. "/de/")
      // We want to remove that
      path: Utils.removeTrailingSlash(localizedPath),
      // Pass in the locale as context to every page
      // This context also gets passed to the src/components/layout file
      // This should ensure that the locale is available on every page
      context: {
        ...page.context,
        locale: lang,
        dateFormat: locales[lang].dateFormat,
      },
    })
  })
}


// As you don't want to manually add the correct language to the frontmatter of each file
// a new node is created automatically with the filename
// It's necessary to do that -- otherwise you couldn't filter by language
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // Check for "Mdx" type so that other files (e.g. images) are exluded
  if (node.internal.type === `Mdx`) {

    // Use path.basename
    // https://nodejs.org/api/path.html#path_path_basename_path_ext

    const name = path.basename(node.fileAbsolutePath, `.mdx`)

    // Find the key that has "default: true" set (in this case it returns "en")
    const defaultKey = Utils.findKey(locales, o => o.default === true)
    
    // Check if post.name is "index.default"
    const isDefault = name === `index.${defaultKey}`


    // Files are defined with "name-with-dashes.lang.mdx"
    // name returns "name-with-dashes.lang"
    // So grab the lang from that string
    // If it's the default language, pass the locale for that
    const lang = isDefault ? defaultKey : name.split(`.`)[1]

    createNodeField({ node, name: `locale`, value: lang })
    createNodeField({ node, name: `isDefault`, value: isDefault })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const artTemplate = require.resolve(`./src/templates/article.js`)

  const result = await graphql(`
    {
      art: allFile(filter: {sourceInstanceName: {eq: "Mdx"}, internal: {mediaType: {eq: "text/mdx"}}}) {
        edges {
          node {
            relativeDirectory
            childMdx {
              fields {
                locale
                isDefault
              }
              frontmatter {
                title
                order
                path
              }
            }
          }
        }
      }
    }  
  `)

  if (result.errors) {
    console.error(result.errors)
    return
  }

  const artList = result.data.art.edges
  const artCount = artList.length/2

  const getNextArt = (currentPage) => {
    return currentPage < artCount ? currentPage + 1 : 1
  }

  artList.forEach(({ node: art }) => {
    
    // All files for a blogpost are stored in a folders
    // relativeDirectory is the name of the folder
    const slug = art.relativeDirectory
    const title = art.childMdx.frontmatter.title
    const locale = art.childMdx.fields.locale
    const isDefault = art.childMdx.fields.isDefault

    createPage({
      path: Utils.localizedSlug( isDefault, locale, slug ),
      component: artTemplate,
      context: {
        artCount,
        postPath: art.childMdx.frontmatter.path,
        currentPage: art.childMdx.frontmatter.order,
        nextArt: getNextArt(art.childMdx.frontmatter.order),  
        fullPath: Utils.localizedSlug( isDefault, locale, slug ),   
        // Pass both the "title" and "locale" to find a unique file
        // Only the title would not have been sufficient as articles could have the same title
        // in different languages, e.g. because an english phrase is also common in german
        title,
        locale
      },
    })
  })
}