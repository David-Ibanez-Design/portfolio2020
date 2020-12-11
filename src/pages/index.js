/* Vendor imports */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { FaDribbble, FaLinkedin } from 'react-icons/fa'
/* App imports */
import Img from 'gatsby-image'
// import SEO from '../components/seo'
import TagList from '../components/tag-list'
import Config from '../../config'
import style from './homepage.module.scss'
import ResumeEn from '../downloads/Resume-en.pdf'
import Buttons from '../components/button'
import Tooltip from "../components/tooltip";
import HeroBg from '../images/icons/heroBackground'
import LocalizedLink from '../components/localizedLink'
import useTranslations from "../components/useTranslations"

const Homepage = ({data}) => {

  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const t = useTranslations()

  const hasWindow = (typeof window !== 'undefined') ? true : false;
  const getWidth = () => hasWindow ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : null;
  
    function useCurrentWidth() {
      // save current window width in the state object
      let [width, setWidth] = useState(getWidth());
  
      // in this case useEffect will execute only once because
      // it does not have any dependencies.
      useEffect(() => {
        const resizeListener = () => {
          // change width from the state object
          setWidth(getWidth())
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);
  
        // clean up function
        return () => {
          // remove resize listener
          window.removeEventListener('resize', resizeListener);
        }
      }, [])
  
      return width;
    }

  let WinWidth = useCurrentWidth();
  let { caseStudyFeatureDesktop,caseStudyFeatureTablet, caseStudiesDesktop, caseStudiesTablet, dribbbleShots, heroVisual, profilePics  } = data
  caseStudyFeatureDesktop = caseStudyFeatureDesktop.edges[0]
  caseStudyFeatureTablet = caseStudyFeatureTablet.edges[0]
  caseStudiesDesktop = caseStudiesDesktop.edges;
  caseStudiesTablet = caseStudiesTablet.edges;

  const dribbbleShotsMap = Config.dribbbleShots;

  function getImg(WinWidth){
    if(WinWidth > 1035){
      return caseStudyFeatureDesktop.node.frontmatter.coverHomepage.childImageSharp.fluid
    }else{
      return caseStudyFeatureTablet.node.frontmatter.coverHomepage.childImageSharp.fluid
    }
  }

  function getImgCaseStudies(WinWidth, coverHomepage, index){
    if(WinWidth > 821){
      return coverHomepage.childImageSharp.fluid
    }else{
      return caseStudiesTablet[index].node.frontmatter.coverHomepage.childImageSharp.fluid
    }
  }

  return(
    <>
      {/* <SEO title="Home" description={Config.siteDescription} path="" /> */}
      <div className={style.heroContainer}>
        <div className={`${style.heroInnerContainer}  ${style.container}`}>
          <div className={style.intro}>
              <div className={style.profilePicContainer}>
                <Img 
                  className={style.profilePicImg}
                  fixed={profilePics.childImageSharp.fixed}
                  alt={caseStudyFeatureDesktop.node.frontmatter.title}
                />            
                <div className={style.profilePicBorder}></div>  
              </div>
              <div className={style.socials}>
                    <span>{t.socialsLinks.Follow}:</span>
                    <a href={Config.social.dribbble} target="_blank" rel="noreferrer" className={style.dribbble}>
                      <FaDribbble size="16" />{t.socialsLinks.Dribbble}
                    </a>
                    <a href={Config.social.linkedin} target="_blank" rel="noreferrer"  className={style.linkedin}>
                      <FaLinkedin size="16" />{t.socialsLinks.Linkedin}
                    </a>
              </div>
              <h1><span>{t.home.title}</span></h1>
              <p>{t.home.heroText}</p>      
              <div className={style.actions}>
                <Buttons destination="external" to={ResumeEn} buttonStyle="primary">{t.socialsLinks.resume}</Buttons>
                <Buttons destination="external" to={`mailto:${Config.email}`} buttonStyle="secondary">{t.socialsLinks.Contact}</Buttons>    
              </div>
            </div>
            <div className={style.heroImageContainer}>
              <Img 
                fluid={heroVisual.childImageSharp.fluid}
                alt={caseStudyFeatureDesktop.node.frontmatter.title}
              />
            </div> 
        </div>  
        <HeroBg className={style.heroBackground}/>
      </div>

        <div className={`${style.articleListContainer}  ${style.container}`}>
          <h2>{t.home.caseStudies}</h2>
              <LocalizedLink className={style.articleFeature} to={`/${caseStudyFeatureDesktop.node.parent.relativeDirectory}`}>
                <div className={style.articleFeatureImage} data-tip data-for="viewProjectHomepage">
                   <Img fluid={hasWindow ? getImg(WinWidth) : null} alt={caseStudyFeatureDesktop.node.frontmatter.title}
                  />
                  <Tooltip id="tooltipFeatureCaseStudy" targetId="viewProjectHomepage" effect="float" hidePointer="hidePointer">
                        {t.home.viewCaseStudy}
                </Tooltip>
                <div className={style.overlay}></div>
                </div>
                <div className={style.articleFeatureContent}>
                  
                    <TagList tags={caseStudyFeatureDesktop.node.frontmatter.tags}/>
                    <h3><span>{caseStudyFeatureDesktop.node.frontmatter.title}</span></h3>
                      <p className={`${style.articleFeatureExcerpt} ${style.truncate}`}>
                        Digima, a web-based CRM application, aim to provide small to medium companies with a way to understand their customers' needs. The contact profile page is a central part of the product. In a single view, the page provides a large amount of information about contact
                      </p>
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
            {caseStudiesDesktop.map((caseStudyDesktop, index) => {
              
              const { title, tags, coverHomepage } = caseStudyDesktop.node.frontmatter
              return(
                  <LocalizedLink key={index} className={style.caseStudies} to={`/${caseStudyDesktop.node.parent.relativeDirectory}`}>
                      <div className={style.caseStudiesImage} data-tip data-for={`viewProjectHomepage-${index}`}>
                        <Img 
                          fluid={hasWindow ? getImgCaseStudies(WinWidth, coverHomepage, index) : null}
                          alt={title}
                        />
                        <Tooltip id={`tooltipFeatureCase-${index}`} targetId={`viewProjectHomepage-${index}`} effect="float" hidePointer="hidePointer">
                                {t.home.viewCaseStudy}
                        </Tooltip>
                        <div className={style.overlay}></div>
                      </div>  
                      <div className={style.caseStudiesContent}>
                        <TagList tags={tags}/>
                        <h4><span>{t.home.title}</span></h4>
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
        <div className={`${style.dribbbleListContainer}  ${style.container}`}>
          <h2>{t.home.otherWorks}</h2>
          <p>Other projects and things I've designed for fun. Check them out on<a href={Config.social.dribbble}> Dribbble.</a></p>
          <div className={style.dribbbleInnerContainer}>
              
          {dribbbleShotsMap.map((dribbbleShotMap, index) => {
             return(
                <a key={index} rel="noreferrer" target="_blank" href={dribbbleShotMap.dribbbleUrl} className={style.dribbbleShots} >
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

export const aboutPropTypes = {
  data: PropTypes.shape({
    caseStudyFeatureDesktop: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    caseStudyFeatureTablet: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    caseStudiesDesktop: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    caseStudiesTablet: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,    
    dribbbleShots: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }),
}

export const pageQuery = graphql`
  query($locale: String!){

    caseStudyFeatureDesktop: allMdx(
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
            path
            title
            tags
            coverHomepage {
              childImageSharp {
                fluid(maxWidth: 715, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp,
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }

    caseStudyFeatureTablet: allMdx(
      filter: {frontmatter: {featured: {eq: 1}}, fields: {locale: {eq: $locale}}}
      ) {
      edges {
        node {
          frontmatter {
            path
            title
            tags
            coverHomepage {
              childImageSharp {
                fluid(maxWidth: 1035, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp,
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }

    caseStudiesDesktop: allMdx(
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
            path
            title
            tags
            featured
            coverHomepage {
              childImageSharp {
                fluid(maxWidth: 624, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp,
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
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
          frontmatter {
            path
            title
            tags
            featured
            coverHomepage {
              childImageSharp {
                fluid(maxWidth: 789, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp,
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }

    dribbbleShots: allFile(
      sort: { fields: [name] }
      filter: {relativeDirectory: {eq: "dribbbleShot"}}) {
      edges {
        node {
          childImageSharp {
                fluid(maxWidth: 624, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp,
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }

        heroVisual: file(
        relativePath: { eq: "homepage/hero-visual.png" }) {
          childImageSharp {
            fluid(maxWidth: 555, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp,
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }

        profilePics: file(
        relativePath: { eq: "homepage/profilePic.jpg" }) {
          childImageSharp {
            fixed(width: 128, height: 128, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
  }
`

export default Homepage

