import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby';
/* App imports */
import Tooltip from "../../tooltip";
import style from './menu.module.scss'
import JapaneseFlag from "../../../images/icons/japanese-flag";
import AmericanFlag from "../../../images/icons/american-flag";
import { LocaleContext } from "../layout"
import useTranslations from "../../useTranslations"
import locales from "../../../../config/i18n"

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
              className={locale === "ja" ? style.active : null} 
              to={switchLangTo("ja")}
              >
              {t.menu.japanese}
            </Link>
            {locale !== "ja" ? (
              <Tooltip targetId="tooltipMenuJpLang" >{t.menu.switchTo}</Tooltip>
            ) : null}
          </li>

          {/* English */}
          <li>
            <AmericanFlag/>
              <Link 
                onClick={ isMobile ? toggleMenu : null} 
                data-tip data-for="switchToEnglish" 
                className={locale === "en" ?  style.active : null} 
                to={switchLangTo("en")}
              >               
                {t.menu.english}
              </Link>
              {locale === "ja" ? (
                <Tooltip targetId="switchToEnglish" >{t.menu.switchTo}</Tooltip>
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
