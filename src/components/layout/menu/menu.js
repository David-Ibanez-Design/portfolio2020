import React, { useState } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
/* App imports */
import LangSwitcher from './lang-switcher'
import style from './menu.module.scss'
import Config from '../../../../config'
import TagList from '../../tag-list'
import Utils from '../../../utils'
import Logo from '../../../images/icons/di-logo'
import IconClose from '../../../images/icons/Icon-close'
import IconMenu from '../../../images/icons/Icon-menu'
import Tooltip from "../../tooltip";
import ResumeJp from '../../../downloads/Resume-jp.pdf'
import ResumeEn from '../../../downloads/Resume-en.pdf'
import { BiChevronDown } from 'react-icons/bi'
import Img from 'gatsby-image'
import useEvent from '../../hooks/useEvent'
import LocalizedLink from '../../localizedLink'
import useTranslations from "../../useTranslations"
import { LocaleContext } from "../layout"
import locales from "../../../../config/i18n"

const Header = ({data}) => {

  const { locale, isArt, localizedPath } = React.useContext(LocaleContext)
  const t = useTranslations()
  const localIsJa = locale === "ja"
  const isHomePage = localizedPath === locale || localizedPath === "/"

  // Since we can't filter a Static query by a variable we need to reduce the returned array
  // Based on the current locale

  data = data.filter(function( obj ) {return obj.node.fields.locale === locale;});
  const articles = data;
  
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

  function toggleActive(page){      
    const isIndex = page === `/`
    const localizedSlug = locales[locale].default ? page : `/${locales[locale].path}${isIndex ? `` : `${page}`}`
    return localizedPath === localizedSlug  ? style.active : null;
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
                <Tooltip id="tooltipMenuLogo" targetId="backToHomepage" effect="solid">
                    {t.menu.backToHome}
                </Tooltip>
            </div>
            
            <div className={style.DesktopMenuButton} onClick={toggleMenu} role="button" tabIndex={0} onKeyDown={handleKeyDown}>
              <IconMenu/>
              <span>{t.menu.menu}</span>
            </div>

            <div className={[style.menuItems,isMenuCollapsed ? style.collapsedMenu : style.expandedMenu,].join(' ')} >
              <ul>
                <li>
                  <LocalizedLink className={toggleActive("/")} to={`/`}>{t.menu.home}</LocalizedLink>
                </li>
                <li className={style.withDropdown} >
                  <Link className={isArt ? style.active : null} to="#">
                    {t.menu.work} 
                    <BiChevronDown size="20" className={style.dropndownIcon}/>
                  </Link> 
                    <ul className={style.desktopDropdown}>
                        <ul className={style.desktopDropdownInner}>
                          {articles.map((article, index) => {
                            const { title, path, tags, menuVignettes } = article.node.frontmatter
                            return (
                                <li key={index} className={`${style.desktopDropdownItem} ${toggleActive(`/${article.node.parent.relativeDirectory}`)}`}>
                                  <LocalizedLink to={`/${article.node.parent.relativeDirectory}`}>
                                    <Img
                                      className={style.preview}
                                      fluid={menuVignettes.childImageSharp.fluid}
                                      alt={title}
                                    />
                                    <span className={style.content}>
                                        <TagList tags={tags} type="small"/>
                                        <p>{title}</p>
                                    </span>
                                  </LocalizedLink>
                                </li>
                            )
                            })}
                        </ul>
                    </ul> 
                </li>
                <li>
                  <LocalizedLink className={toggleActive("/about")} to={`/about`}>{t.menu.about} </LocalizedLink>
                </li> 
                <li>
                  <a className={style.externalLinks} href={localIsJa ? ResumeJp : ResumeEn} target="_blank"　rel="noreferrer">
                    {t.menu.resume}
                  </a>
                </li> 
                <li>
                  <a className={style.externalLinks} href={`mailto:${Config.email}`} target="_blank"　rel="noreferrer">
                    {t.menu.contact}
                  </a>
                </li>
              </ul> 
            </div>
            <div className={style.desktopLanguageContainer}>
                <LangSwitcher　Tooltip={Tooltip} style={style} isMobile={false} toggleMenu={toggleMenu}/>
            </div>
        </div> 
        <div className={style.srollBackground} ></div>   
      </div>   
      {/* End of Desktop Menu */}


      {/* Mobile Menu */}
      {isMenuCollapsed ? (
      <div className={style.mobileMenu} >
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
            <ul>
              <li>
                <LocalizedLink  
                  onClick={toggleMenu}
                  onKeyDown={handleKeyDown}
                  className={toggleActive("/")}  
                  to={`/`}>
                    {t.menu.home}
                </LocalizedLink>
              </li>
              <li className={style.withDropdown} >
                <Link className={isArt ? style.active : null} to="#">
                  {t.menu.work} 
                </Link> 
                  <ul className={style.mobileDropdown}>
                    <ul className={style.mobileDropdownInner}>
                    <li className={style.mobileDropdownItem}>
                          {articles.map((article, index) => {
                          const { title, path, tags, mobileVignettes } = article.node.frontmatter
                            return (   
                              <LocalizedLink to={`/${article.node.parent.relativeDirectory}`} key={index}>
                                    <span className={`${style.mobileDropdownContainer} ${toggleActive(`/${article.node.parent.relativeDirectory}`)}`}>                                   
                                      <span className={style.mobileDropdownContent}>
                                        <Img
                                            className={style.mobileDropdownImage}
                                            fluid={mobileVignettes.childImageSharp.fluid}
                                            alt={title}
                                          />
                                          <span className={style.mobileDropdownContentTags}>
                                            <TagList limit={2} tags={tags} type="small"/>
                                          </span>
                                          <span className={style.mobileDropdownContentTitle}>
                                            {title}
                                          </span>
                                      </span>
                                    </span> 
                              </LocalizedLink>
                            )
                          })}
                      </li>
                    </ul>
                  </ul>
              </li>
              <li>
                <LocalizedLink 
                  onClick={toggleMenu}
                  onKeyDown={handleKeyDown}
                  className={toggleActive("/about")} 
                  to={`/about`}>
                    {t.menu.about}
                </LocalizedLink>
              </li> 
              <li>
                <a href={localIsJa ? ResumeJp : ResumeEn} target="_blank"　rel="noreferrer">{t.resume}</a>
              </li> 
              <li>
                <a href={`mailto:${Config.email}`} target="_blank"　rel="noreferrer">{t.contact}</a>
              </li>
            </ul>               
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

export default function MyStaticQuery(props) {

  return (
    <StaticQuery
    query={graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___order], order: ASC }
        ) {
          edges {
            node {
                fields{
                  locale
                }
                parent {
                  ... on File {
                    relativeDirectory
                  }
                }
                frontmatter {
                  path
                  title
                  tags
                  order
                  menuVignettes {
                    childImageSharp {
                      fluid(maxWidth: 174, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                  mobileVignettes {
                    childImageSharp {
                      fluid(maxWidth: 260, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }                  
                }
              }
            }
          }
        }
    `}
     render={data => ( <Header  data={data.allMdx.edges} {...props}/> )}
    />
  )

  }


