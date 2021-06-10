/* Vendor imports */
import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import useTranslations from "../../components/useTranslations"
import SEO from '../../components/seo'
import TagList from '../../components/tag-list'
import style from './about.module.scss'
import ResumeEn from '../../downloads/Resume-en.pdf'
import ResumeJp from '../../downloads/Resume-jp.pdf'
import Config from '../../../gatsby-config'
import LocalizedLink from '../../components/localizedLink'
import { LocaleContext } from "../../components/layout"
import JapaneseFlag from "../../images/icons/japanese-flag";
import FranceFlag from "../../images/icons/france-flag";
import AmericanFlag from "../../images/icons/american-flag";
import Galogo from "../../images/icons/google-analytics-logo";
import IllustratorLogo from "../../images/icons/illustrator-logo";
import InvisionLogo from "../../images/icons/invision-logo";
import PhotoshopLogo from "../../images/icons/photoshop-logo";
import SketchLogo from "../../images/icons/sketch-logo";
import SmartlookLogo from "../../images/icons/smartlook-logo";
import TableauLogo from "../../images/icons/tableau-logo";
import VscodeLogo from "../../images/icons/VS-code-logo";


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
          <div className="container-sm mt-7">
              <h4 className={style.aboutSubTitle}>{t.about.technicalSkills}</h4>
              <TagList 
                tags={["UserResearch", 
                "UserFlow", 
                "Wireframe", 
                "Prototyping", 
                "VisualDesign", 
                "DesignSystem", 
                "DataVisualization", 
                "DataAnalysis", 
                "Code",
              ]}
                type="large"
                />
          </div>
          <div className="container-sm mt-7">
              <h4 className={style.aboutSubTitle}>{t.about.languageSkills.description}</h4>
              <div className={style.languageSkills}>
                <div className={style.languageSkillsInner}>
                  <FranceFlag/>
                  <div>
                    <p>{t.about.languageSkills.lang1}</p>
                    <p>{t.about.languageSkills.langSkills1}</p>
                  </div>
                </div>
                <div className={style.languageSkillsInner}>
                  <JapaneseFlag className={style.japaneseFlag}/>
                  <div>                 
                  <p>{t.about.languageSkills.lang2}</p>
                    <p>{t.about.languageSkills.langSkills2}</p>
                  </div>
                </div>
                <div className={style.languageSkillsInner}>
                  <AmericanFlag />
                  <div> 
                  <p>{t.about.languageSkills.lang3}</p>
                    <p>{t.about.languageSkills.langSkills3}</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="container-sm mt-7">
              <h4 className={style.aboutSubTitle}>{t.about.tools.description}</h4>
              <div className={style.tools}>
                <a href="https://www.sketch.com/design/" className={style.toolsInner} target="_blank" rel="noreferrer"> 
                  <span className={style.toolsIcon}>
                    <SketchLogo/>
                  </span>
                  <p>{t.about.tools.tool1}</p>
                </a>
                <a href="https://www.invisionapp.com/" className={style.toolsInner} target="_blank" rel="noreferrer"> 
                  <span className={style.toolsIcon}>
                    <InvisionLogo/>
                  </span>
                  <p>{t.about.tools.tool2}</p>
                </a>
                <a href="https://www.adobe.com/products/photoshop.html" className={style.toolsInner} target="_blank" rel="noreferrer"> 
                  <span className={style.toolsIcon}>
                    <PhotoshopLogo/>
                  </span>
                  <p>{t.about.tools.tool3}</p>
                </a>
                <a href="https://www.adobe.com/products/illustrator.html" className={style.toolsInner} target="_blank" rel="noreferrer"> 
                  <span className={style.toolsIcon}>
                    <IllustratorLogo/>
                  </span>
                  <p>{t.about.tools.tool4}</p>
                </a>
                <a href="https://www.tableau.com/" className={style.toolsInner} target="_blank" rel="noreferrer"> 
                  <span className={style.toolsIcon}>
                    <TableauLogo/>
                  </span>
                  <p>{t.about.tools.tool5}</p>
                </a>
                <a href="https://marketingplatform.google.com/about/analytics/" className={style.toolsInner} target="_blank" rel="noreferrer"> 
                  <span className={style.toolsIcon}>
                    <Galogo/>
                  </span>
                  <p>{t.about.tools.tool6}</p>
                </a>
                <a href="https://code.visualstudio.com/" className={style.toolsInner} target="_blank" rel="noreferrer"> 
                  <span className={style.toolsIcon}>
                    <VscodeLogo/>
                  </span>
                  <p>{t.about.tools.tool7}</p>
                </a>
                <a href="https://www.smartlook.com/" className={style.toolsInner} target="_blank" rel="noreferrer"> 
                  <span className={style.toolsIcon}>
                    <SmartlookLogo/>
                  </span>
                  <p>{t.about.tools.tool8}</p>
                </a>
              </div>
          </div>
          <div className="container-sm mt-7">
              <h4 className={style.aboutSubTitle}>{t.about.process.description}</h4>
              <div className={style.process}>
              <div className={style.processInner}> 
                    <div className={style.processIcon}>
                      <AmericanFlag/>
                    </div>
                    <div className={style.processContent}>
                      <p>{t.about.process.processTitle1}</p>
                      <p dangerouslySetInnerHTML={{__html: t.about.process.processDescription1}} />
                    </div>
                </div>
                <div className={style.processInner}> 
                    <div className={style.processIcon}>
                      <AmericanFlag/>
                    </div>
                    <div className={style.processContent}>
                      <p>{t.about.process.processTitle2}</p>
                      <p dangerouslySetInnerHTML={{__html: t.about.process.processDescription2}} />
                    </div>
                </div>
                <div className={style.processInner}> 
                    <div className={style.processIcon}>
                      <AmericanFlag/>
                    </div>
                    <div className={style.processContent}>
                      <p>{t.about.process.processTitle3}</p>
                      <p dangerouslySetInnerHTML={{__html: t.about.process.processDescription3}} />
                    </div>
                </div>
                <div className={style.processInner}> 
                    <div className={style.processIcon}>
                      <AmericanFlag/>
                    </div>
                    <div className={style.processContent}>
                      <p>{t.about.process.processTitle4}</p>
                      <p dangerouslySetInnerHTML={{__html: t.about.process.processDescription4}} />
                    </div>
                </div>       
              </div>
          </div>
        </div>
    </>
  )
}

export const pageQuery = graphql`
     {profilePhoto: file(name: { eq: "about-placeholder" }) {...imageMedium}}
`
export default About