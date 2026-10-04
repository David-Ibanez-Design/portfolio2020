const locales = require('../config/i18n')

const PREFERRED_LANG_KEY = 'preferredLang'

const Utils = {

  /**
   * First of the browser's preferred languages that the site is available in.
   * @return {string|null} Locale key from config/i18n (e.g. "ja"), or null if none match.
   */
  getBrowserLang: () => {
    if (typeof navigator === 'undefined') return null
    const browserLocales = navigator.languages || [navigator.language]
    const match = browserLocales
      .filter(Boolean)
      .map(lang => lang.trim().split(/-|_/)[0].toLowerCase())
      .find(lang => locales[lang])
    return match || null
  },

  /**
   * Language the visitor picked with the language switcher, if any.
   * Storage can be unavailable (private mode, blocked site data), so failures are ignored.
   * @return {string|null} Locale key from config/i18n, or null if none was saved.
   */
  getPreferredLang: () => {
    try {
      const lang = window.localStorage.getItem(PREFERRED_LANG_KEY)
      return locales[lang] ? lang : null
    } catch (e) {
      return null
    }
  },

  setPreferredLang: (lang) => {
    try {
      window.localStorage.setItem(PREFERRED_LANG_KEY, lang)
    } catch (e) {}
  },

  /**
   * Path of the current page in another language.
   * @param {string} localizedPath Current page path from pageContext (e.g. "/about", "ja/about", "ja").
   * @param {string} locale Current page locale.
   * @param {string} targetLang Locale key to switch to.
   * @return {string} Path of the same page in targetLang.
   */
  switchLangPath: (localizedPath, locale, targetLang) => {
    const pageName = localizedPath === locale ? "" : localizedPath.substring(localizedPath.lastIndexOf('/') + 1)
    const isIndex = (pageName === `/` || pageName === ``)
    return locales[targetLang].default ? `/${pageName}` : `/${locales[targetLang].path}${isIndex ? `` : `/${pageName}`}`
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
