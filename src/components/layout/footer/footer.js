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
import MenuItems from "../menu/menu-items"
import menuStyle from '../menu/menu.module.scss'

const Footer = () => {

  const { locale, localizedPath, isArt } = React.useContext(LocaleContext)
  const t = useTranslations()
  const localIsJa = locale === "ja"

  function toggleActive(page){   
    const isIndex = page === `/`
    const localizedSlug = locales[locale].default ? page : `/${locales[locale].path}${isIndex ? `` : `${page}`}`
    return localizedPath === localizedSlug  ? "active" : null;   
  }

  return (
    <>
      <div className={`${style.container} ${!isArt ? "mt-11" : null}`}>
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
                <div className={menuStyle.footerMenu}>
                  <MenuItems withWork={false} />
                </div>
                <div className={menuStyle.FooterlangSwitcher}>
                  <LangSwitcher/>
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
