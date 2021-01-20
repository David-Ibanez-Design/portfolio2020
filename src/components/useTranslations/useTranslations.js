import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { LocaleContext } from "../layout"

const useTranslations = () => {
  // Grab the locale (passed through context) from the Context Provider
  const { locale } = React.useContext(LocaleContext)
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query)

  // Simplify the response from GraphQL
  const simplified = rawData.edges.map(item => {
    return {
      name: item.node.name,
      translations: item.node.translations,
    }
  })

  // Only return translations for the current locale
  const { translations } = simplified.filter(lang => lang.name === locale)[0]

  return translations
}

export default useTranslations

const query = graphql`
  query useTranslations {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            site{
              title
              description
              author
            }
            menu{
              menu
              home
              work
              about
              resume
              contact
              japanese
              english
              backToHome
              switchTo
            }
            notFound{
              title
              description
              backBtn
            }
            home{
              title
              seoTitle
              seoDescription           
              heroText
              viewResume
              contact
              caseStudies
              viewCaseStudy
              otherWorks
              viewOnDribbble
            }
            dribbbleShots{
              description
              projects
            }
            suggestedArt{
              next
              viewCaseStudy
            }
            about{
              title
              seoTitle
              seoDescription
              subtitle
              textPart1
              link
              textPart2
            }
            socialsLinks{
              Linkedin
              Dribbble
              Follow
              Contact
              or
              resume
              socials
            }
            footer{
              title1
              subtitle1
              title2
              subtitle2
              legals
              text
              legals           
            }

          }
        }
      }
    }
  }
`