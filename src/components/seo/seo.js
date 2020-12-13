/* Vendor imports */
import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
/* App imports */
import { LocaleContext } from "../layout"
import useTranslations from "../useTranslations"

const SEO = ({
  title,
  description,
  path,
  keywords,
  contentType,
  data}) => {

  const t = useTranslations()
  const { locale } = React.useContext(LocaleContext)
  const metaKeywords =
  keywords && keywords.length > 0
    ? { name: 'keywords', content: keywords.join(', ') }
    : []

  return(

        <Helmet
          title={title} // Page title
          titleTemplate={`%s | ${t.site.title}`}
          meta={
            [
              { name: 'description', content: description }, // Page description
              /* Open Graph */
              { property: 'og:title', content: title },
              { property: 'og:type', content: contentType || 'website' },
              { property: 'og:url', content: path },
              { property: 'og:description', content: description },
              { property: 'og:image', content: data.file.childImageSharp.fluid.src },
              { property: 'og:image:alt', content: t.site.description },
              { property: 'og:site_name', content: t.site.title },
              { property: 'og:locale', content: locale || 'en_US' }
            ]
              .concat(metaKeywords) // Keywords
          }
          link={[{ rel: 'canonical', href: path }]}>  
          <html lang={locale || 'en'} />
      </Helmet>

  )
}

export default function MyStaticQuery(props) {

  return (
    <StaticQuery
    query={graphql`
      query {
        file(name: { eq: "di-logo-image" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      `}
       render= {data  => ( <SEO data={data} {...props}/> )}
      />
    )


  }