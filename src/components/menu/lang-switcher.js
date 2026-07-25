import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby';
/* App imports */
import Tooltip from "../tooltip";
import style from './menu.module.scss'
import JapaneseFlag from "../../images/icons/japanese-flag";
import AmericanFlag from "../../images/icons/american-flag";
import { LocaleContext } from "../layout"
import useTranslations from "../useTranslations"
import locales from "../../../config/i18n"

const LangSwitcher = ({toggleMenu, isMobile, requestLangChange, idSuffix = "" }) => {

  const { locale, localizedPath, BrowserPreferredLang } = React.useContext(LocaleContext)
  const t = useTranslations()

  // Tooltip ids must be unique per LangSwitcher instance (header, mobile menu, footer),
  // otherwise every instance's tooltip opens at once on hover.
  const jpTooltipId = `tooltipMenuJpLang${idSuffix}`
  const enTooltipId = `switchToEnglish${idSuffix}`

  const pageName = localizedPath === locale ? "" : localizedPath.substring(localizedPath.lastIndexOf('/') + 1);

  function switchLangTo(targetLang) {
       const isIndex = (pageName === `/` || pageName === ``)
       return locales[targetLang].default ? `/${pageName}` : `/${locales[targetLang].path}${isIndex ? `` : `/${pageName}`}`  
  }

  return (
        <ul> 
          {/* Japanese */}
          <li data-tip data-for={jpTooltipId} >
            <JapaneseFlag className={style.japaneseFlag}/>
            <Link 
              onClick={ isMobile ? toggleMenu : null}
              className={locale === "ja" ? style.active : null} 
              to={switchLangTo("ja")}
              >
              {t.menu.japanese}
            </Link>
            {locale !== "ja" ? (
              <Tooltip place="top" targetId={jpTooltipId} >{t.menu.switchTo}</Tooltip>
            ) : null}
          </li>

          {/* English */}
          <li data-tip data-for={enTooltipId} >
            <AmericanFlag/>
              <Link 
                onClick={ isMobile ? toggleMenu : null}    
                className={locale === "en" ?  style.active : null} 
                to={switchLangTo("en")}
              >               
                {t.menu.english}
              </Link>
              {locale === "ja" ? (
                <Tooltip targetId={enTooltipId} >{t.menu.switchTo}</Tooltip>
              ) : null}
          </li>
        </ul>
  )
}

LangSwitcher.propTypes = {
  isMobile: PropTypes.bool
}


LangSwitcher.defaultProps = {
  isMobile: false
}

export default LangSwitcher
