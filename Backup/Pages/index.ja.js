/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
/* App imports */
import Layout from '../components/layout'
import SEO from '../components/seo'
// import ArticleList from '../components/article-list'
import Config from '../../config'

const IndexPage = ({ data }) => (
  <Layout currentLang={Config.translatedLanguage}>
    <SEO title="Home" description={Config.siteDescription} path="" />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/index.mdx$/" } }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            tags
            coverHomepage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
