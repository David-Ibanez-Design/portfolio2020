/* Vendor imports */
import React from 'react'
/* App imports */
import Footer from '../footer'
import Menu from '../menu'
/* Base style: makes it available to all components under layout  */
import "../../styles/base/normalize.scss";
import "../../styles/base/base.scss";
import "../../styles/base/typography-base.scss";
import "../../styles/utilities/margin-padding.scss";
import "../../styles/utilities/color.scss";
import "../../styles/utilities/layout.scss";
// import "../tooltip/tooltip.module.scss";


const LocaleContext = React.createContext()

const Layout = ({children, pageContext: { locale, localizedPath, isArt } }) => (
  <LocaleContext.Provider value={{ locale, localizedPath, isArt }}>
    <Menu/>
      {children}
   <Footer/>
  </LocaleContext.Provider>
)

export {Layout, LocaleContext}
