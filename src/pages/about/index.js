/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import style from './about.module.scss'
import ResumeEn from '../../downloads/Resume-en.pdf'
import Config from '../../../config'
import Utils from '../../utils'


class About extends React.Component {

  render() {

    let { profilePhoto } = this.props.data
  
    return (
      <Layout>
        <SEO
          title="About"
          description="A brief summary of this blog"
          path="about"
        />
        <div className={style.container}>
          <div className="container-md mt-13">
            <Img fluid={profilePhoto.childImageSharp.fluid} className={style.images}/>
          </div>
          <div className="container-sm mt-7">
              <h5>About Me</h5>
              <h1>I’m a UI/UX designer with 7 years of experience.</h1>
              <p>
              My knowledge of Frontend development gives me the tools to understand developer’s perspectives and 
              quickly prototype ideas to ensure technical feasibility.
              <br/><br/>
              For the past four years, I have been working as a UI/UX designer in the SaaS industry. 
              Working in collaboration with backend, frontend developers, and business managers taught me how to 
              carefully balance business goals, engineering constraints, and user needs.
              <br/><br/>
              Lately, I have been excited about <Link to={Utils.resolveLangPageUrl("", Config.pages.article, "data-gathering")}>improving the business decision process as well as my own design 
              process through the use of qualitative and quantitative data.</Link>
              <br/><br/>
              In my free time, I love to travel, workout, and watch movies about  [...]
              <br/><br/>
              I’m currently looking to join an existing design team in a company that trusts the design process 
              to deliver meaningful and measurable changes to their customers.
              <br/><br/>
              <span>Follow me on </span>
              <a 
                href={Config.social.linkedin} 
                target="_blank" 
                rel="noreferrer"  
                className={style.linkedin}> Linkedin
              </a> 
              <span> or</span>
              <a 
                href={Config.social.dribbble} 
                target="_blank" 
                rel="noreferrer"  
                className={style.dribbble}> Dribbble.
              </a> 
              <span> Contact me at</span>
              <a 
                href={`mailto:${Config.email}`}
                target="_blank" 
                rel="noreferrer"  
                className={style.dribbble}> {Config.email + " "} 
              </a> 
              <span> or</span>
              <a 
                href={ResumeEn}
                target="_blank" 
                rel="noreferrer"  
                className={style.dribbble}> view my resume.
              </a> 
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}


export const aboutPropTypes = {
  data: PropTypes.shape({
    FileFromDir: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
    profilePhoto: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }),
}

export const pageQuery = graphql`
  
     {
      profilePhoto: file(name: { eq: "about-placeholder" }) {
         childImageSharp {
           fluid(maxWidth: 1035, quality: 100) {
             ...GatsbyImageSharpFluid_withWebp,
             ...GatsbyImageSharpFluidLimitPresentationSize
           }
         }
       }

    }
`

export default About
