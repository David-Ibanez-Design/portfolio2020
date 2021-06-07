/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
/* App imports */
import style from './toc.module.scss'
import { LocaleContext } from "../layout"
import Utils from '../../utils'
import useTranslations from "../useTranslations"

const Toc = ({headings}) => {

  const { locale } = React.useContext(LocaleContext)

  // Add missing conclusion in some articles
  for (var i = 0; i < headings.length; i++){

      if(headings[i].value === "Conclusion" || headings[i].value === "結論" ){
        break;
      }else if (i+1 === headings.length){
        if(locale === "ja"){
          headings.push({value: "結論"})
        }else{
          headings.push({value: "Conclusion"})
        }
        break;
      }
  }

  return(
   <ul class={style.toc}>
    {headings.map((heading, index) => (
      <li key={index}>
        <a href={Utils.getAnchor(heading.value, true)}>
          {heading.value}
        </a>
      </li>
    ))}
   </ul>
  )

}


export default Toc
