/* Vendor imports */
import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import useTranslations from "../../components/useTranslations"
import SEO from '../../components/seo'
import style from './about.module.scss'
import ResumeEn from '../../downloads/Resume-en.pdf'
import ResumeJp from '../../downloads/Resume-jp.pdf'
import Config from '../../../gatsby-config'
import LocalizedLink from '../../components/localizedLink'
import { LocaleContext } from "../../components/layout"

const About = ({data}) => {

  const profilePhoto = data.profilePhoto
  const { localizedPath, locale } = React.useContext(LocaleContext)

  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const t = useTranslations()
  return (
    <>
        <SEO title={t.about.seoTitle} description={t.about.seoDescription} path={localizedPath}
        />
        <div className={style.container}>
          <div className="container-md mt-13">
            <Img fluid={profilePhoto.childImageSharp.fluid} className={style.images}/>
          </div>
          <div className="container-sm mt-7">
              <h5>{t.about.subtitle}</h5>
              <h1>{t.about.title}</h1>
              <p>
                <span dangerouslySetInnerHTML={{__html: t.about.textPart1}}/>
                <LocalizedLink to={`/data`}>{t.about.link}</LocalizedLink>
                <span dangerouslySetInnerHTML={{__html: t.about.textPart2}}/>
                <span> {locale === "en" ? t.socialsLinks.Follow : "私の"} </span>
                <a 
                  href={Config.siteMetadata.social.linkedin} 
                  target="_blank" 
                  rel="noreferrer"  
                  className={style.linkedin}> {t.socialsLinks.Linkedin},
                </a> 
                {locale === "en" ? "" : "や"}
                <a 
                  href={Config.siteMetadata.social.dribbble} 
                  target="_blank" 
                  rel="noreferrer"  
                  className={style.dribbble}> {t.socialsLinks.Dribbble}
                </a> 
                {locale === "en" ? "" : "をフォローしてください。"}
                <span> {t.socialsLinks.Contact} </span>
                <a 
                  href={`mailto:${Config.siteMetadata.email}`}
                  target="_blank" 
                  rel="noreferrer"  
                  className={style.dribbble}> {Config.siteMetadata.email + " "} 
                </a> 
                {locale === "en" ? "" : "です。"}
                <span> {t.socialsLinks.or}</span>
                <a 
                  href={locale === "en" ? ResumeEn : ResumeJp}
                  target="_blank" 
                  rel="noreferrer"  
                  className={style.dribbble}> {t.socialsLinks.resume}
                </a> 
                {locale === "en" ? "" : "もぜひご覧ください。"}
              </p>
          </div>
        </div>
    </>
  )
}

export const pageQuery = graphql`
     {profilePhoto: file(name: { eq: "about-placeholder" }) {...imageMedium}}
`
export default About