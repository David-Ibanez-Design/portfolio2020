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
import Utils from '../../utils'


const H4 = ({ children }) => {
  return (
    <h4 id={Utils.getAnchor(children, false)}>
      {children}
    </h4>
  );
};


const target = React.createRef();

const ArticleContent = ({body, imagesObj, displayToc}) => (
  <div className={style.container}>
     <article ref={target} className={!displayToc ? style.illustrations : null}>
        <MDXProvider 
          components={{
            Img,
            Link,
            Images,
            ArticleOverview,
            h4: H4
           }}
          >
          <MDXRenderer style={style} images={imagesObj}>
            {body}
          </MDXRenderer>
        </MDXProvider>
        <ScrollTop/>
     </article> 
  </div>
)

ArticleContent.propTypes = {
  body: PropTypes.string.isRequired,
}

export default ArticleContent
