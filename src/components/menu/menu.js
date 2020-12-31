import React, { useState } from 'react'
/* App imports */
import LangSwitcher from './lang-switcher'
import style from './menu.module.scss'
import Logo from '../../images/icons/di-logo'
import IconClose from '../../images/icons/Icon-close'
import IconMenu from '../../images/icons/Icon-menu'
import Tooltip from "../tooltip";
import useEvent from '../hooks/useEvent'
import LocalizedLink from '../localizedLink'
import useTranslations from "../useTranslations"
import { LocaleContext } from "../layout"
import MenuItems from "./menu-items"

const Header = () => {

  const { locale, localizedPath } = React.useContext(LocaleContext)
  const t = useTranslations()
  const isHomePage = localizedPath === locale || localizedPath === "/"
  
  const [isMenuCollapsed, setMenuCollapsed] = useState(false)
  const [isHeaderCollapsed, setHeaderCollapsed] = useState(false)

  function toggleFixedHeader() {
    if (!isHeaderCollapsed && window.scrollY > 100) {
      setHeaderCollapsed(true)
    } else if (isHeaderCollapsed && window.scrollY < 100) {
      setHeaderCollapsed(false)
    }
  }

  function handleKeyDown(ev) {
  if (ev.keyCode === 13) {
    toggleMenu();
   }
  }

  function toggleMenu() {
    document.body.style.overflow === "" ? document.body.style.overflow = "hidden" : document.body.removeAttribute("style")
    setMenuCollapsed(!isMenuCollapsed)
  }

  function getMenuBg() {
      if(!isHomePage){
        return style.menuIsScrolled
      }
      else if(isHeaderCollapsed){
        return style.menuIsScrolled
      }
  }

  useEvent('scroll', toggleFixedHeader)

  return (
    <>
      {/* Desktop Menu */}
      <div className={`${style.desktopMenu} ${getMenuBg()}`}>
        <div className={style.desktopMenuInnerContainer}>       
            <div className={style.logo}>
                <LocalizedLink className={style.logoLink} data-tip data-for="backToHomepage" to={`/`} >
                  <Logo/>
                </LocalizedLink>
                <Tooltip targetId="backToHomepage">
                    {t.menu.backToHome}
                </Tooltip>
            </div>
            
            <div className={style.DesktopMenuButton} onClick={toggleMenu} role="button" tabIndex={0} onKeyDown={handleKeyDown}>
              <IconMenu/>
              <span>{t.menu.menu}</span>
            </div>

            <div className={[style.menuItemsContainer,isMenuCollapsed ? style.collapsedMenu : style.expandedMenu,].join(' ')} >
              <MenuItems/>
            </div>
            <div className={style.desktopLanguageContainer}>
              <LangSwitcher　Tooltip={Tooltip} style={style} toggleMenu={toggleMenu}/>
            </div>
        </div> 
        <div className={style.srollBackground} ></div>   
      </div>   
      {/* End of Desktop Menu */}


      {/* Mobile Menu */}
      {isMenuCollapsed ? (
      <div className={style.mobileMenu}>
        <div className={style.MobileMenuInnerContainer}>
            <div className={style.MobileMenuHeader}>
                <div className={style.logo}>
                  <LocalizedLink onClick={toggleMenu} to={`/`}>
                    <Logo />
                  </LocalizedLink>
                </div>
                <div className={style.closeIcon}>
                    <IconClose onClick={toggleMenu} />
                </div>
            </div>

            <div className={style.menusContainers}>
              <MenuItems isMobile={true} toggleMenu={toggleMenu}/>
              <div className={style.MobilelanguageContainer}>
                <LangSwitcher style={style} isMobile={true} toggleMenu={toggleMenu}/>
              </div>
            </div>
        </div>
      </div>
      ): null }
    </>
  )
}

export default Header;