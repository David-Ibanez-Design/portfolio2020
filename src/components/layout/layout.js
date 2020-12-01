/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'

/* App imports */
import Menu from './menu'
import Footer from './footer'
/* Base style: makes it available to all components under layout  */
import "../../styles/base/normalize.scss";
import "../../styles/base/base.scss";
import "../../styles/base/typography-base.scss";
import "../../styles/utilities/margin-padding.scss";
import "../../styles/utilities/color.scss";
import "../../styles/utilities/layout.scss";

import style from './layout.module.scss'

const Layout = ({ children, title, currentLang }) => (
  <>
    <Menu currentLang={currentLang} />
    <div className={style.container}>
      {title ? (
        <div className={style.title}>
          <h1>{title}</h1>
        </div>
      ) : null}
      {children}
    </div>
    <Footer currentLang={currentLang}/>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: '',
}

export default Layout
