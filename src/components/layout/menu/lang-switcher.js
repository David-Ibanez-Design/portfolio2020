import React from 'react';
import { Link } from 'gatsby';
import Config from '../../../../config';
/* App imports */
import Tooltip from "../../tooltip";
import style from './menu.module.scss'
import JapaneseFlag from "../../../images/icons/japanese-flag";
import AmericanFlag from "../../../images/icons/american-flag";

const LangSwitcher = ({toggleMenu, isMobile, currentLang, currentPage, withFlag=false }) => {
  let pageName = currentPage.lastIndexOf('/') + 1;
  let URLSize = currentPage.split('/').length;
  let transLang = Config.translatedLanguage;

  return (
        <ul> 
          {/* Japanese */}
          <li>
            <JapaneseFlag className={style.japaneseFlag}/>
            <Link 
              onClick={ isMobile ? toggleMenu : null}
              data-tip data-for="tooltipMenuJpLang" 
              className={currentLang ? "active": null} 
              to={currentLang === transLang ? currentPage: currentPage.substr(0, pageName) + transLang + "/" + currentPage.substr(pageName)}>
              {transLang}
            </Link>
            {!currentLang ? (<Tooltip id="tooltipMenuJpLang" targetId="tooltipMenuJpLang" effect="solid" >日本語に変える</Tooltip>) : null}
          </li>

          {/* English */}
          <li>
            <AmericanFlag/>
            {URLSize === 2 ? (
                <Link onClick={ isMobile ? toggleMenu : null} className={!currentLang ?  "active": null} to={currentLang === transLang ? currentPage.replace("/" + currentLang, "/") : currentPage.replace("/" + currentLang + "/", "/")}>
                  {Config.defaultLanguage}
                </Link>
            ) : (
              <>
                <Link onClick={ isMobile ? toggleMenu : null} data-tip data-for="switchToEnglish" className={!currentLang ?  "active": null} to={currentLang === transLang ? currentPage.replace("/" + currentLang + "/", "/") : currentPage}>
                  {Config.defaultLanguage}
                </Link>

                {currentLang ? (<Tooltip id="tooltipMenuEnLang" targetId="switchToEnglish" effect="solid" >Switch to English</Tooltip>) : null}
              </>
            )}
          </li>
        </ul>
  )
}

export default LangSwitcher
