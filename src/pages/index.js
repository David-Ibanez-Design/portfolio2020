/* Vendor imports */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { FaDribbble, FaLinkedin } from 'react-icons/fa'
/* App imports */
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TagList from '../components/tag-list'
import Config from '../../config'
import style from './homepage.module.scss'
import ResumeEn from '../downloads/Resume-en.pdf'
import Buttons from '../components/button'
import Tooltip from "../components/tooltip";
import Utils from '../utils'
import HeroBg from '../images/icons/heroBackground'

const Homepage = ({ data, currentLang }) => {

    const getWidth = () => window.innerWidth 
    || document.documentElement.clientWidth 
    || document.body.clientWidth;
  
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

  const featurePath = caseStudyFeatureDesktop.node.frontmatter.path;
  const dribbbleShotsMap = Config.dribbbleShots;

  return(
    <Layout>
      <SEO title="Home" description={Config.siteDescription} path="" />
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
                    <span>Follow me on:</span>
                    <a href={Config.social.dribbble} target="_blank" rel="noreferrer" className={style.dribbble}>
                      <FaDribbble size="16" />Dribbble
                    </a>
                    <a href={Config.social.linkedin} target="_blank" rel="noreferrer"  className={style.linkedin}>
                      <FaLinkedin size="16" />Linkedin
                    </a>
              </div>
              <h1><span>I’m David, I’m a UI/UX Designer With 7 Years Of Experience.</span></h1>
              <p>
              My knowledge of Frontend development helps me efficiently communicate 
              my designs to developers. I’m looking to join a company that trusts 
              the design process to deliver meaningful changes to their customers.
              </p>      
              <div className={style.actions}>
                <Buttons destination="external" to={ResumeEn} buttonStyle="primary">See my resume</Buttons>
                <Buttons destination="external" to={`mailto:${Config.email}`} buttonStyle="secondary">Contact me</Buttons>    
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
          <h2>Case Studies</h2>
              <Link className={style.articleFeature} to={Utils.resolveLangPageUrl(currentLang, Config.pages.article, featurePath.split('/')[featurePath.split('/').length-1])}>
                <div className={style.articleFeatureImage} data-tip data-for="viewProjectHomepage">
                   <Img 
                      fluid={WinWidth > 1035 ? caseStudyFeatureDesktop.node.frontmatter.coverHomepage.childImageSharp.fluid : caseStudyFeatureTablet.node.frontmatter.coverHomepage.childImageSharp.fluid}
                      alt={caseStudyFeatureDesktop.node.frontmatter.title}
                  />
                  <Tooltip targetId="viewProjectHomepage" effect="float" hidePointer="hidePointer">
                        View case study
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
                        <p>View case study</p>
                        <div className={style.iconArrow}>
                          <div className={style.iconArrowRect}></div>
                          <div className={style.iconArrowHead}></div>    
                        </div>
                      </div>
                </div>
            </Link>         

          <div className={`${style.otherCaseStudies}  ${style.container}`}>
            {caseStudiesDesktop.map((caseStudyDesktop, index) => {
              
              const { title, path, tags, coverHomepage } = caseStudyDesktop.node.frontmatter
              return(
                  <Link key={index} className={style.caseStudies} to={Utils.resolveLangPageUrl(currentLang, Config.pages.article, path.split('/')[path.split('/').length-1])}>
                      <div className={style.caseStudiesImage} data-tip data-for={`viewProjectHomepage-${index}`}>
                        <Img 
                          fluid={WinWidth > 821 ? coverHomepage.childImageSharp.fluid : caseStudiesTablet[index].node.frontmatter.coverHomepage.childImageSharp.fluid}
                          alt={title}
                        />
                        <Tooltip targetId={`viewProjectHomepage-${index}`} effect="float" hidePointer="hidePointer">
                                View case study
                        </Tooltip>
                        <div className={style.overlay}></div>
                      </div>  
                      <div className={style.caseStudiesContent}>
                        <TagList tags={tags}/>
                        <h4><span>{title}</span></h4>
                        <div className={style.more}>
                          <p>View case study</p>
                          <div className={style.iconArrow}>
                            <div className={style.iconArrowRect}></div>
                            <div className={style.iconArrowHead}></div>    
                          </div>
                        </div>
                      </div>
                  </Link>
                  )
                } )}
          </div>
         
      </div>
        <div className={`${style.dribbbleListContainer}  ${style.container}`}>
          <h2>Other Work</h2>
          <p>Other projects and things I've designed for fun. Check them out on<a href="#"> Dribbble.</a></p>
          <div className={style.dribbbleInnerContainer}>
              
          {dribbbleShotsMap.map((dribbbleShotMap, index) => {
             return(
                <a key={index} rel="noreferrer" target="_blank" href={dribbbleShotMap.dribbbleUrl} className={style.dribbbleShots} >
                  <div className={style.dribbbleShotsImage} data-tip data-for="viewProjectHomepage-1">
                    <Img fluid={dribbbleShots.edges[index].node.childImageSharp.fluid} alt="sss"/>
                    <Tooltip targetId="viewProjectHomepage-1" effect="float" hidePointer="hidePointer">
                          View on Dribbble
                    </Tooltip>
                    <div className={style.overlay}></div>
                  </div>  
                  <p>{dribbbleShotMap.description}</p>
                </a>
             )
          })}
          </div>       
        </div>
    </Layout>
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
  {
    caseStudyFeatureDesktop: allMdx(
      filter: {frontmatter: {featured: {eq: 1}}, fileAbsolutePath: {regex: "/index.mdx$/"}}
      ) {
      edges {
        node {
          frontmatter {
            path
            title
            tags
            coverHomepage {
              childImageSharp {
                fluid(maxWidth: 715, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    caseStudyFeatureTablet: allMdx(
      filter: {frontmatter: {featured: {eq: 1}}, fileAbsolutePath: {regex: "/index.mdx$/"}}
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
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    caseStudiesDesktop: allMdx(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: {frontmatter: {featured: {eq: 0}}, fileAbsolutePath: {regex: "/index.mdx$/"}}
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
                fluid(maxWidth: 624, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    caseStudiesTablet: allMdx(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: {frontmatter: {featured: {eq: 0}}, fileAbsolutePath: {regex: "/index.mdx$/"}}
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
                  ...GatsbyImageSharpFluid
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
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }

        heroVisual: file(
        relativePath: { eq: "homepage/hero-visual.png" }) {
          childImageSharp {
            fluid(maxWidth: 555, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        profilePics: file(
        relativePath: { eq: "homepage/profilePic.jpg" }) {
          childImageSharp {
            fixed(width: 128, height: 128, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
  }
`

export default Homepage

