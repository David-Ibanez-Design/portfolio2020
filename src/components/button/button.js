/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import LocalizedLink from '../localizedLink'
/* App imports */
import style from './button.module.scss'

const Button = ({ children, destination, to, buttonStyle, className }) => (
  <>
  
    {destination == "external" ?
      (
        <a 
          href={to} 
          target="_blank"
          className={`
            ${style.button} 
            ${buttonStyle === "primary" ? style.buttonPrimary : style.buttonSecondary } 
            ${className ? className : ""}`}
          rel="noreferrer"
          >
          {children}</a>
      ):
      (
        <>

        <LocalizedLink to={to} className={`${style.button} ${buttonStyle === "primary" ? style.buttonPrimary : style.buttonSecondary }`}>
          {children}
        </LocalizedLink>
        </>
      )
    }
  </>

)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  destination: PropTypes.oneOf(['external', 'internal']),
  to: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
}

Button.defaultProps = {
  buttonStyle: style.buttonPrimary,
  destination: 'internal'
}

export default Button
