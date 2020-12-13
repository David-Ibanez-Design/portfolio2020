/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
/* App imports */
import Config from '../../../config'
import { locale } from "../layout"
import useTranslations from "../useTranslations"

const t = useTranslations()

function SEO({
  title,
  description,
  path,
  locale,
  keywords,
  contentType,
  useTranslations,
  meta,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        console.log(t)
        const metaKeywords =
          keywords && keywords.length > 0
            ? { name: 'keywords', content: keywords.join(', ') }
            : []
       

        return (
          <Helmet
            title={title} // Page title
            titleTemplate={`%s | ${Config.siteTitle}`}
            meta={
              [
                { name: 'description', content: description }, // Page description
                /* Open Graph */
                { property: 'og:title', content: title },
                { property: 'og:type', content: contentType || 'website' },
                { property: 'og:url', content: path },
                { property: 'og:description', content: description },
                { property: 'og:image', content: data.file.childImageSharp.fluid.src },
                { property: 'og:image:alt', content: description },
                { property: 'og:site_name', content: Config.siteTitle },
                { property: 'og:locale', content: locale || 'en_US' }
              ]
                .concat(metaKeywords) // Keywords
                .concat(meta || []) // Other provided metadata
            }
            link={[{ rel: 'canonical', href: path }]}>  
            <html lang={locale || 'en'} />
          </Helmet>
        )
      }}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  lang: PropTypes.string,
  contentType: PropTypes.oneOf(['article', 'website']),
  imageUrl: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  translations: PropTypes.arrayOf(
    PropTypes.shape({
      hreflang: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      property: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    file(name: { eq: "di-logo-image" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default SEO
