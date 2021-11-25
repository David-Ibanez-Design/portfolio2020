/* Vendor imports */
import React from 'react'
import { graphql, navigate } from 'gatsby'
import { FaDribbble, FaLinkedin } from 'react-icons/fa'
/* App imports */
import Img from 'gatsby-image'
import SEO from '../components/seo'
import TagList from '../components/tag-list'
import Config from '../../gatsby-config'
import style from './homepage.module.scss'
import ResumeEn from '../downloads/Resume-en.pdf'
import ResumeJp from '../downloads/Resume-jp.pdf'
import Buttons from '../components/button'
import Testimonies from "../components/testimonies"
import IndeedLogo from "../images/icons/indeed";
import MercariLogo from "../images/icons/mercari";
import Tooltip from "../components/tooltip";
import HeroBg from '../images/icons/heroBackground'
import LocalizedLink from '../components/localizedLink'
import useTranslations from "../components/useTranslations"
import { LocaleContext } from "../components/layout"


const Homepage = ({data, requestLangChange}) => {

  const t = useTranslations()
  const { localizedPath, locale, BrowserPreferredLang } = React.useContext(LocaleContext)
  
  let { caseStudyFeatureTablet, caseStudiesTablet, dribbbleShots,testimoniesImg, heroVisual, profilePics  } = data
  caseStudyFeatureTablet = caseStudyFeatureTablet.edges[0]
  caseStudiesTablet = caseStudiesTablet.edges;

  // If users has a different default browser language setting that the website
  // Redirect them to their prefered langauge
  // ISSUE: we need to let user change lang whe the use the lang switcher

  // if(locale == "en" && BrowserPreferredLang == "ja" && !requestLangChange){
  //   navigate("/ja")}
  // else if(locale == "ja" && BrowserPreferredLang == "en" && !requestLangChange){
  //   navigate("/")
  // }

  return(
    <>
      <SEO title={t.home.seoTitle} description={t.home.description} path={localizedPath} />
      <div className={style.heroContainer}>
        <div className={`${style.heroInnerContainer}  ${style.container}`}>
          <div className={style.intro}>
              <div className={style.profilePicContainer}>
                <Img 
                  className={style.profilePicImg}
                  fixed={profilePics.childImageSharp.fixed}
                />            
                <div className={style.profilePicBorder}></div>  
              </div>
              <div className={style.socials}>
                    <span>{t.socialsLinks.Follow}:</span>
                    <a href={Config.siteMetadata.social.dribbble} target="_blank" rel="noreferrer" className={style.dribbble}>
                      <FaDribbble size="16" />{t.socialsLinks.Dribbble}
                    </a>
                    <a href={Config.siteMetadata.social.linkedin} target="_blank" rel="noreferrer"  className={style.linkedin}>
                      <FaLinkedin size="16" />{t.socialsLinks.Linkedin}
                    </a>
              </div>
              <h1><span>{t.home.title}</span></h1>
              <p>{t.home.heroText}</p>      
              <div className={style.actions}>
                <Buttons destination="external" to={locale === "en" ? ResumeEn : ResumeJp} buttonStyle="primary">{t.home.viewResume}</Buttons>
                <Buttons destination="external" to={`mailto:${Config.siteMetadata.email}`} buttonStyle="secondary">{t.home.contact}</Buttons>    
              </div>
            </div>
            <div className={style.heroImageContainer}>
              <Img fluid={heroVisual.childImageSharp.fluid} />
            </div> 
        </div>  
        <HeroBg className={style.heroBackground}/>
      </div>

        <div className={`${style.articleListContainer}  ${style.container}`}>
          <h2>{t.home.caseStudies}</h2>
              <LocalizedLink className={style.articleFeature} to={`/${caseStudyFeatureTablet.node.parent.relativeDirectory}`}>
                <div className={style.articleFeatureImage} data-tip data-for="viewProjectHomepage">
                  <Img fluid={caseStudyFeatureTablet.node.frontmatter.coverHomepage.childImageSharp.fluid} alt={caseStudyFeatureTablet.node.frontmatter.title} />
                  <Tooltip id="tooltipFeatureCaseStudy" targetId="viewProjectHomepage" effect="float" hidePointer="hidePointer">
                        {t.home.viewCaseStudy}
                </Tooltip>
                <div className={style.overlay}></div>
                </div>
                <div className={style.articleFeatureContent}>
                  
                    <TagList tags={caseStudyFeatureTablet.node.frontmatter.tags}/>
                    <h3><span>{caseStudyFeatureTablet.node.frontmatter.title}</span></h3>
                      <p className={`${style.articleFeatureExcerpt} ${style.truncate}`}>{caseStudyFeatureTablet.node.frontmatter.synopsis}</p>
                      <div className={style.more}>
                        <p>{t.home.viewCaseStudy}</p>
                        <div className={style.iconArrow}>
                          <div className={style.iconArrowRect}></div>
                          <div className={style.iconArrowHead}></div>    
                        </div>
                      </div>
                </div>
            </LocalizedLink>      

          <div className={`${style.otherCaseStudies}  ${style.container}`}>
            {caseStudiesTablet.map((caseStudiesTab, index) => {
              
              const { title, tags } = caseStudiesTab.node.frontmatter
              return(
                  <LocalizedLink key={index} className={style.caseStudies} to={`/${caseStudiesTab.node.parent.relativeDirectory}`}>
                      <div className={style.caseStudiesImage} data-tip data-for={`viewProjectHomepage-${index}`}>
                        <Img 
                          fluid={caseStudiesTablet[index].node.frontmatter.coverHomepage.childImageSharp.fluid}
                          alt={title}
                        />
                        <Tooltip id={`tooltipFeatureCase-${index}`} targetId={`viewProjectHomepage-${index}`} effect="float" hidePointer="hidePointer">
                                {t.home.viewCaseStudy}
                        </Tooltip>
                        <div className={style.overlay}></div>
                      </div>  
                      <div className={style.caseStudiesContent}>
                        <TagList tags={tags}/>
                        <h4><span>{title}</span></h4>
                        <div className={style.more}>
                          <p>{t.home.viewCaseStudy}</p>
                          <div className={style.iconArrow}>
                            <div className={style.iconArrowRect}></div>
                            <div className={style.iconArrowHead}></div>    
                          </div>
                        </div>
                      </div>
                  </LocalizedLink>
                  )
                } )}
          </div>
      </div>
      
      <Testimonies />

        <div className={`${style.dribbbleListContainer}  ${style.container}`}>
          <h2>{t.home.otherWorks}</h2>
          <p>
            {locale === "en" ?  
              (
                <>
                  {t.home.dribbbleShots.description}
                  <a target="_blank" rel="noreferrer" href={Config.siteMetadata.social.dribbble}> {t.socialsLinks.Dribbble}.</a>
                </>
              )
                :
              (
                <>
                  {t.home.dribbbleShots.description}
                  <a target="_blank" rel="noreferrer" href={Config.siteMetadata.social.dribbble}>{t.socialsLinks.Dribbble}</a>でご覧ください。
                </>
              )
              }
          </p>
          
          <div className={style.dribbbleInnerContainer}>
          
          {t.home.dribbbleShots.projects.map((dribbbleShotMap, index) => {
             return(
                <a key={index} rel="noreferrer" target="_blank" href={`https://dribbble.com/shots/${dribbbleShotMap.dribbbleUrl}`} className={style.dribbbleShots} >
                  <div className={style.dribbbleShotsImage} data-tip data-for="viewProjectHomepage-1">
                    <Img fluid={dribbbleShots.edges[index].node.childImageSharp.fluid} alt="sss"/>
                    <Tooltip id={`tooltipDribbbleShots-${index}`} targetId="viewProjectHomepage-1" effect="float" hidePointer="hidePointer">
                      {t.home.viewOnDribbble}
                    </Tooltip>
                    <div className={style.overlay}></div>
                  </div>  
                  <p>{dribbbleShotMap.description}</p>
                </a>
             )
          })}
          </div>       
        </div>
    </>
    )
  }

export const pageQuery = graphql`
  query($locale: String!){

    caseStudyFeatureTablet: allMdx(
      filter: {frontmatter: {featured: {eq: 1}}, fields: {locale: {eq: $locale}}}
      ) {
      edges {
        node {
          parent {
            ... on File {
              relativeDirectory
            }
          }
          frontmatter {
            ...articleFields
            coverHomepage {
              ...imageMedium
            }
          }
        }
      }
    }


    caseStudiesTablet: allMdx(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: {frontmatter: {featured: {eq: 0}}, fields: {locale: {eq: $locale}}}
    ) {
      edges {
        node {
          parent {
            ... on File {
              relativeDirectory
            }
          }
          frontmatter {
            ...articleFields
            featured
            coverHomepage {
              childImageSharp {
                fluid(maxWidth: 789) {
                  ...GatsbyImageSharpFluid_withWebp,
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }

    testimoniesImg: allFile(
      sort: { fields: [name] }
      filter: {relativeDirectory: {eq: "testimonies"}}) {
      edges {
        node {
          ...imageSmall
            }
          }
        }

        Luke: file(
        relativePath: { eq: "01-Luke.png" }) {
          ...imageXXSmall
        }

    dribbbleShots: allFile(
      sort: { fields: [name] }
      filter: {relativeDirectory: {eq: "dribbbleShot"}}) {
      edges {
        node {
          ...imageSmall
            }
          }
        }

        heroVisual: file(
        relativePath: { eq: "homepage/hero-visual.png" }) {
          ...imageXXSmall
        }

        profilePics: file(
        relativePath: { eq: "homepage/profilePic.jpg" }) {
          childImageSharp {
            fixed(width: 128, height: 128) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
  }
`

export default Homepage

