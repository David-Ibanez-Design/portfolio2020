const Utils = {

  setDefaultLang: (contextLang, options = {}) => {
      const defaultOptions = {
        languageCodeOnly: true,
        languageFallback: "ja",
      };

      const opt = {
        ...defaultOptions,
        ...options,
      };

      if(typeof navigator !== 'undefined'){

        const browserLocales =
        navigator.languages === undefined
          ? [navigator.language]
          : navigator.languages;
      
        if (!browserLocales) { return contextLang === defaultOptions.languageFallback ;}

        const browserLocalesArr = []
        
        browserLocales.map(locale => {
          const trimmedLocale = locale.trim();
          browserLocalesArr.push(opt.languageCodeOnly ? trimmedLocale.split(/-|_/)[0] : trimmedLocale);
        });

        // If the array is empty set the fallback language as the default language
        if(browserLocalesArr.length === 0){
          return contextLang === defaultOptions.languageFallback

        // If the first result it equal to the context lang
        }else if(browserLocalesArr[0] === contextLang){
          return browserLocalesArr[0]
        }else{
          return browserLocalesArr[0]
        }

      }else{
          return contextLang === defaultOptions.languageFallback
        }

  },


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

  getAnchor: (value, withHash = false) => {
    value = withHash ? "#"+value : value
    return value
    .toLowerCase()
    .replace(/\s+/g, '-')
  },


  localizedSlug: (isDefault, locale, slug) => {
    if(isDefault)
    {return "/"+slug}
    else
    {return "/"+locale+"/"+slug}
  },

  removeTrailingSlash: (path) => {
   return  path === `/` ? path : path.replace(/\/$/, ``)
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

  /**
   * Capitalize passed string
   * @param {string} str string to capitalize
   * @return {string} string with first letter to uppercase
   */
  capitalize: str => str[0].toUpperCase() + str.slice(1),
}

module.exports = Utils
