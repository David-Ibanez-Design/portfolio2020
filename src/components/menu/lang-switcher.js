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
import Utils from "../../utils"

const LangSwitcher = ({toggleMenu, isMobile, idSuffix = "" }) => {

  const { locale, localizedPath } = React.useContext(LocaleContext)
  const t = useTranslations()

  // Tooltip ids must be unique per LangSwitcher instance (header, mobile menu, footer),
  // otherwise every instance's tooltip opens at once on hover.
  const jpTooltipId = `tooltipMenuJpLang${idSuffix}`
  const enTooltipId = `switchToEnglish${idSuffix}`

  function switchLangTo(targetLang) {
       return Utils.switchLangPath(localizedPath, locale, targetLang)
  }

  // Remember the choice so the browser-language redirect in Layout doesn't override it
  function onSelectLang(targetLang) {
       Utils.setPreferredLang(targetLang)
       if (isMobile) toggleMenu()
  }

  return (
        <ul> 
          {/* Japanese */}
          <li data-tip data-for={jpTooltipId} >
            <JapaneseFlag className={style.japaneseFlag}/>
            <Link 
              onClick={() => onSelectLang("ja")}
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
                onClick={() => onSelectLang("en")}
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
