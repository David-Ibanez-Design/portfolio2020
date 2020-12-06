/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
/* App imports */
import Layout from '../components/layout'
// import SEO from '../components/seo'
// import ArticleHeading from './article-heading'
import ArticleContent from './article-content'
// import SuggestedArticles from './suggested-articles'
import style from './article.module.scss'
// import Config from '../../config'

const Post = ({ data }) => {

  const { body, frontmatter } = data.articleContent

  return (
    <Layout>
      {/* <SEO
        title={title}
        path={path}
        description={title}
        contentType="article"
        keywords={tags}
      /> */}
      <div className={style.container}>
        {/* <ArticleHeading title={title} tags={tags} /> */}
        <div className={style.content}>
          <ArticleContent 
            body={body} 
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`

query Post($locale: String!, $title: String!) {
  articleContent: mdx(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
      }
      body
    }
  }
`
export default Post
