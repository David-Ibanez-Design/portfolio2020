import React from 'react';
import { Link } from 'gatsby';
import Config from '../../../../config';
/* App imports */
import Tooltip from "../../tooltip";
import style from './menu.module.scss'
import JapaneseFlag from "../../../images/icons/japanese-flag";
import AmericanFlag from "../../../images/icons/american-flag";
import { LocaleContext } from "../layout"
import useTranslations from "../../useTranslations"
import LocalizedLink from '../../localizedLink'
import locales from "../../../../config/i18n"
import Utils from '../../../utils'

const LangSwitcher = ({toggleMenu, isMobile }) => {

  const { locale, localizedPath } = React.useContext(LocaleContext)
  const t = useTranslations()

  const pageName = localizedPath === locale ? "" : localizedPath.substring(localizedPath.lastIndexOf('/') + 1);

  function switchLangTo(targetLang) {   
       const isIndex = (pageName === `/` || pageName === ``)
       return locales[targetLang].default ? `/${pageName}` : `/${locales[targetLang].path}${isIndex ? `` : `/${pageName}`}`  
  }

  return (
        <ul> 
          {/* Japanese */}
          <li>
            <JapaneseFlag className={style.japaneseFlag}/>
            <Link 
              onClick={ isMobile ? toggleMenu : null}
              data-tip data-for="tooltipMenuJpLang" 
              className={locale === "ja" ? "active": null} 
              to={switchLangTo("ja")}
              >
              {t.menu.japanese}
            </Link>
            {locale !== "ja" ? (
              <Tooltip id="tooltipMenuJpLang" targetId="tooltipMenuJpLang" effect="solid" >{t.menu.switchTo}</Tooltip>
            ) : null}
          </li>

          {/* English */}
          <li>
            <AmericanFlag/>
              <Link 
                onClick={ isMobile ? toggleMenu : null} 
                data-tip data-for="switchToEnglish" 
                className={locale === "en" ?  "active": null} 
                to={switchLangTo("en")}
              >               
                {t.menu.english}
              </Link>
              {locale === "ja" ? (
                <Tooltip id="tooltipMenuEnLang" targetId="switchToEnglish" effect="solid" >{t.menu.switchTo}</Tooltip>
              ) : null}
          </li>
        </ul>
  )
}

export default LangSwitcher
