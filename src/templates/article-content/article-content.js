/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from "@mdx-js/react";
import Img from 'gatsby-image'
import { Link } from 'gatsby'
/* App imports */
import style from './article-content.module.scss'
import Images from "../../components/embedded-images"
import ScrollTop from "../../components/scroll-top"
import ArticleOverview from "../../components/article-overview"

const components = {
  Img,
  Link,
  Images,
  ArticleOverview
}

const target = React.createRef();

const ArticleContent = ({body, imageMd, imageLg, imageXl, imageXXl}) => (

  <div className={style.container}>
     <article ref={target}>
     
        <MDXProvider components={components}>
          <MDXRenderer 
            style={style}
            md={imageMd}
            lg={imageLg}
            xl={imageXl}   
            xxl={imageXXl} 
          >{body}</MDXRenderer>
        </MDXProvider>
        <ScrollTop/>
     </article>
     
  </div>


)

ArticleContent.propTypes = {
  body: PropTypes.string.isRequired,
}

export default ArticleContent
