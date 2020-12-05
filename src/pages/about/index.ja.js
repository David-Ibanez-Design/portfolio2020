/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
/* App imports */
import { aboutPropTypes } from './index'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import style from './about.module.scss'
import ResumeJp from '../../downloads/Resume-jp.pdf'
import Config from '../../../config'

class About extends React.Component {
  static propTypes = aboutPropTypes

  render() {
  
    return (
      <Layout currentLang={Config.translatedLanguage}>
        <SEO
          title="About"
          description="A brief summary of this blog"
          path="about"
        />
        <div className={style.container}>
          <div className={style.photo}>
          </div>
          <div className={style.content}>
            <h1>Hi, I'm Luigi!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              cursus venenatis arcu, cursus pretium enim lacinia nec. Duis
              viverra sagittis neque. Fusce non luctus urna. Vivamus suscipit
              metus ac posuere egestas. Nunc a pulvinar purus. Vivamus nisi mi,
              fringilla quis lacus et, sagittis mollis massa. Cras tempus massa
              quis lobortis laoreet. Pellentesque metus odio, sagittis nec
              venenatis non, maximus congue eros. Suspendisse pellentesque purus
              sit amet ante commodo, et molestie mauris aliquet. Proin non nibh
              libero. Fusce at nulla euismod, condimentum augue quis, convallis
              justo.
            </p>
            <a href={ResumeJp} target="_blank"　rel="noreferrer">Resume</a>
            <h1>Hi, I'm Luigi!</h1>
          </div>
          <div className={style.photo}>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    profilePhoto: file(name: { eq: "profile-photo" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

  }
`

export default About
