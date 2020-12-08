/* Vendor imports */
import React from 'react'
import { FaDribbble, FaLinkedin } from 'react-icons/fa'
/* App imports */
import style from './footer.module.scss'
import Utils from '../../../utils'
import Config from '../../../../config'
import Buttons from '../../../components/button'
import LangSwitcher from "../../layout/menu/lang-switcher"
import ResumeJp from '../../../downloads/Resume-jp.pdf'
import ResumeEn from '../../../downloads/Resume-en.pdf'
import useTranslations from "../../useTranslations"
import LocalizedLink from '../../localizedLink'
import { LocaleContext } from "../layout"
import locales from "../../../../config/i18n"

const Footer = () => {

  const { locale, localizedPath } = React.useContext(LocaleContext)
  const t = useTranslations()
  const localIsJa = locale === "ja"

  // get the current page via the context instead
  let currentPage = "/"
  if(typeof window !== `undefined`) {
    currentPage = window.location.pathname
  }


  function toggleActive(page){   
    const isIndex = page === `/`
    const localizedPath = locales[locale].default ? page : `/${locales[locale].path}${isIndex ? `` : `${page}`}`
    return localizedPath === localizedPath  ? "active" : null;   
  }

  return (
    <>
      <div className={`${style.container} ${currentPage.includes(Config.pages.article) === false ? "mt-11" : null}`}>
          <div className={style.innerContainer}>
            <div className={style.menusContainer}>
              <div className={style.contactInfo}>
              <h6>{t.footer.subtitle1}</h6>
              <h1>{t.footer.title1}</h1>
              <p className={style.outro}>{t.footer.text}</p>
              <Buttons destination="external" to={`mailto:${Config.email}`} buttonStyle="primary">Contact me</Buttons>
              </div>
              <div className={style.menu}>
                <h6>{t.footer.subtitle2}</h6>
                <h1>{t.footer.title2}</h1>
                <ul>
                <li>
                    <LocalizedLink className={toggleActive("/")} to={`/`}>
                      {t.menu.home}
                    </LocalizedLink>
                  </li>
                  <li>
                      <LocalizedLink className={toggleActive("/about")} to={`/about`}>
                        {t.menu.about}
                      </LocalizedLink>
                  </li> 
                  <li>
                    <a href={localIsJa ? ResumeJp : ResumeEn} target="_blank"　rel="noreferrer">{t.menu.resume}</a>
                  </li> 
                  <li>
                    <a href={`mailto:${Config.email}`} target="_blank"　rel="noreferrer">{t.menu.contact}</a>
                  </li>
                </ul>
                <div className={style.langSwitcher}>
                  {/* <LangSwitcher isMobile={false}/> */}
                </div>
              </div>
              <div className={style.socialsMobileContainer}>
                <h6>{t.socialsLinks.Follow}</h6>
                <h1>{t.socialsLinks.socials}</h1>
                <ul>
                  <li>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={Config.social.dribbble}
                    data-tip 
                    data-for="social1"
                  >
                    {t.socialsLinks.Dribbble}
                  </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href={Config.social.linkedin}
                      data-tip 
                      data-for="social2"
                    >
                      {t.socialsLinks.Linkedin}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          <div className={style.socialsContainer}>
            <ul className={style.socials}>
                <li>
                <FaDribbble size="14"/>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={Config.social.dribbble}
                    data-tip 
                    data-for="social1"
                  >
                    {t.socialsLinks.Dribbble}
                  </a>
                </li>
                <li>
                <FaLinkedin size="14"/>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={Config.social.linkedin}
                    data-tip 
                    data-for="social2"
                  >
                    {t.socialsLinks.Linkedin}
                  </a>
                </li>
              </ul>
              <p className={style.legals}>© 2020 {t.footer.legals}.</p>
          </div>

          </div>
      </div>
    </>
  )
}

export default Footer
