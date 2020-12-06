/* Vendor imports */
const path = require('path');
/* App imports */
const config = require('./config');
const utils = require('./src/utils');

exports.createPages = ({ actions, graphql }) => {

  const { createPage } = actions;

  return graphql(`
    {
      allMdx {
        edges {
          node {
                        relativeDirectory
            fields {
              locale
              isDefault
            }
            frontmatter {
              path
              tags
              order
            }
          }
        }
      }
    }    
  `).then(result => {
    if (result.errors) return Promise.reject(result.errors);

    const { site, allMdx } = result.data
    // To account for translation pages the count need to be divided by 2
    const artCount = allMdx.edges.length/2
    const getNextArt = (currentPage) => {
      return currentPage < artCount ? currentPage + 1 : 1
    }

    /* Post pages */
    allMdx.edges.forEach(({ node, index }) => {
      // Check path prefix of post
      if (node.frontmatter.path.indexOf(config.pages.article) !== 0) throw `Invalid path prefix: ${node.frontmatter.path}`
      
      createPage({
        path: node.frontmatter.path,
        component: path.resolve('src/templates/article.js'),
        context: {
          postPath: node.frontmatter.path,
          artCount,
          currentPage: node.frontmatter.order,
          nextArt: getNextArt(node.frontmatter.order),
          translations: utils.getRelatedTranslations(node, allMdx.edges)
        }
      })
    })

    const regexForIndex = /index\.mdx$/
    // Posts in default language, excluded the translated versions
    const defaultPosts = allMdx.edges.filter(({ node: { fileAbsolutePath } }) => fileAbsolutePath.match(regexForIndex))

  })

};

