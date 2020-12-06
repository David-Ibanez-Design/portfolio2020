const Config = require('../config')

const Utils = {
  /**
   * Join provided url paths.
   * @param {...string} paths Provided paths. It doesn't matter if they have trailing slash.
   * @return {string} Resolved url without trailing slash.
   */
  resolveUrl: (...paths) => {
    return paths.reduce((resolvedUrl, path) => {
      let urlPath = path.toString().trim()
      if (urlPath)
        resolvedUrl +=
          (resolvedUrl === '' ? '' : '/') + urlPath.replace(/^\/|\/$/g, '')
      return resolvedUrl
    }, '')
  },

  localizedSlug: (isDefault, locale, slug) => {
    if(isDefault)
    {return "/"+slug}
    else
    {return "/"+locale+"/"+slug}
  },
 
  // From lodash:
  // https://github.com/lodash/lodash/blob/750067f42d3aa5f927604ece2c6df0ff2b2e9d72/findKey.js
  findKey: (object, predicate) => {
    let result
    if (object == null) {
      return result
    }
    Object.keys(object).some(key => {
      const value = object[key]
      if (predicate(value, key, object)) {
        result = key
        return true
      }
      return false
    })
    return result
  },

  /**
   * Resolve a page url adding a trailing slash.
   * Needed to prevent 301 redirects cause of Gatsby.js' folder structure.
   * @param {...string} path Provided paths. It doesn't matter if they have trailing slash.
   * @return {string} Resolved url with trailing slash.
   */
  resolvePageUrl: (...path) => {
    let resolvedUrl = Utils.resolveUrl(...path)
    return resolvedUrl + '/'
  },


resolveLangPageUrl: (currentLang, targetPAge, articleTitle="") => {
    switch (targetPAge){
      // Homepage
      case "/" : return currentLang ? "/"+currentLang : targetPAge
      // About, resume
      case "about" : return currentLang ? "/"+currentLang+"/"+targetPAge : "/"+targetPAge
      // Articles
      case "articles" : return currentLang ? "/"+targetPAge+"/"+currentLang+"/"+articleTitle : "/"+targetPAge+"/"+articleTitle
      default : break;
    }
 },

  /**
   * Pass a post and retrieve a list of related translations.
   * @param {Object} article The post of which retrieve its translations. It accepts a `node` object from Graphql's query `allMdx`
   * @param {Object} postList The list of posts where search translations. It accepts a `edges` array from Graphql's query `allMdx`
   * @return {Object} An array of objects with languages as keys (ISO 639-1) and translated post's paths as values.
   */
  getRelatedTranslations: (article, articleList) => {
 
    return articleList
      .filter(({ node }) => {
        // Get posts in the same folder of provided post
        return (
          node.fileAbsolutePath.split('/').slice(-2, -1)[0] ===
          article.fileAbsolutePath.split('/').slice(-2, -1)[0]
        )
      })
      .map(({ node }) => {
        
        let currentLang = node.fileAbsolutePath.split('.').slice(-2, -1)[0]
      
        return {
          hreflang: currentLang.slice(-5) !== 'index' ? currentLang : Config.defaultLanguage,
          path: Utils.resolvePageUrl(node.frontmatter.path),
        }
      })
  },
  /**
   * Capitalize passed string
   * @param {string} str string to capitalize
   * @return {string} string with first letter to uppercase
   */
  capitalize: str => str[0].toUpperCase() + str.slice(1),
}

module.exports = Utils
