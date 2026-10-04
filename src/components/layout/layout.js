/* Vendor imports */
import React from 'react'
import { navigate } from 'gatsby'
/* App imports */
import Footer from '../footer'
import Menu from '../menu'
import Utils from '../../utils'
/* Base style: makes it available to all components under layout  */
import "../../styles/base/normalize.scss";
import "../../styles/base/base.scss";
import "../../styles/base/typography-base.scss";
import "../../styles/utilities/margin-padding.scss";
import "../../styles/utilities/color.scss";
import "../../styles/utilities/layout.scss";

const LocaleContext = React.createContext()

const Layout = ({children, pageContext: { locale, localizedPath, isArt } }) => {

  // On a visitor's first page, show the site in their browser language if it differs from the page's.
  // Once they pick a language with the language switcher, that choice wins and no redirect happens.
  React.useEffect(() => {
    if (!locale || !localizedPath || localizedPath.includes(`404`)) return
    if (Utils.getPreferredLang()) return
    const browserLang = Utils.getBrowserLang()
    if (browserLang && browserLang !== locale) {
      navigate(Utils.switchLangPath(localizedPath, locale, browserLang), { replace: true })
    }
  }, [locale, localizedPath])

  return (
    <LocaleContext.Provider value={{ locale, localizedPath, isArt }}>
        <Menu/>
          {children}
        <Footer/>
    </LocaleContext.Provider>
  )
}

export {Layout, LocaleContext}
