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

const Header = ({currentLang, data}) => {

  const articles = data;


  let currentPage = "/"
  if(typeof window !== `undefined`) {
    currentPage = window.location.pathname
  }
  
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

  function toggleActive(pageLangUrl, articleTitle=""){      
          
    let finalUrl = Utils.resolveLangPageUrl(currentLang, pageLangUrl, articleTitle);
    let isArticle = currentPage.includes(Config.pages.article);
    if(currentPage === finalUrl || (articleTitle === "" && isArticle && pageLangUrl === Config.pages.article) ){
      return style.active
    }
  }

  function toggleMenu() {
    document.body.style.overflow === "" ? document.body.style.overflow = "hidden" : document.body.removeAttribute("style")
    setMenuCollapsed(!isMenuCollapsed)
  }

  function getMenuBg() {
      if(currentPage !== "/"){
        return style.menuIsScrolled
      }
      else if(currentPage === "/" && isHeaderCollapsed){
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
                <Link className={style.logoLink} data-tip data-for="backToHomepage" to={Utils.resolveLangPageUrl(currentLang, Config.pages.home)} >
                  <Logo/>
                </Link>
                <Tooltip id="tooltipMenuLogo" targetId="backToHomepage" effect="solid">
                    {!currentLang ? "Back the homepage" : "Homepageに戻る"}
                </Tooltip>
            </div>
            
            <div className={style.DesktopMenuButton} onClick={toggleMenu} role="button" tabIndex={0} onKeyDown={handleKeyDown}>
              <IconMenu/>
              <span>Menu</span>
            </div>

            <div className={[style.menuItems,isMenuCollapsed ? style.collapsedMenu : style.expandedMenu,].join(' ')} >
              <ul>
                <li>
                  <Link  
                    className={toggleActive(Config.pages.home)}  
                    to={Utils.resolveLangPageUrl(currentLang, Config.pages.home)}>
                      Home
                  </Link>
                </li>
                <li className={style.withDropdown} >
                  <Link className={toggleActive(Config.pages.article)} to="#">
                    Work 
                    <BiChevronDown size="20" className={style.dropndownIcon}/>
                  </Link> 
                    <ul className={style.desktopDropdown}>
                        <ul className={style.desktopDropdownInner}>
                          {articles.map((article, index) => {
                            const { title, path, tags, menuVignettes } = article.node.frontmatter
                            return (
                                <li key={index} className={`${style.desktopDropdownItem} ${toggleActive(Config.pages.article,  path.split('/')[path.split('/').length-1])}`}>
                                  <a href={Utils.resolveLangPageUrl(currentLang, Config.pages.article, path.split('/')[path.split('/').length-1])}>
                                    <Img
                                      className={style.preview}
                                      fluid={menuVignettes.childImageSharp.fluid}
                                      alt={title}
                                    />
                                    <span className={style.content}>
                                        <TagList tags={tags} type="small"/>
                                        <p>{title}</p>
                                    </span>
                                  </a>
                                </li>
                            )
                            })}
                        </ul>
                    </ul> 
                </li>
                <li>
                  <Link 
                    className={toggleActive(Config.pages.about)} 
                    to={Utils.resolveLangPageUrl(currentLang, Config.pages.about)}>
                      About
                  </Link>
                </li> 
                <li>
                  <a className={style.externalLinks} href={currentLang ? ResumeJp : ResumeEn} target="_blank"　rel="noreferrer">
                    Resumé
                  </a>
                </li> 
                <li>
                  <a className={style.externalLinks} href={`mailto:${Config.email}`} target="_blank"　rel="noreferrer">
                    Contact
                  </a>
                </li>
              </ul> 
            </div>
            <div className={style.desktopLanguageContainer}>
                <LangSwitcher　Tooltip={Tooltip} currentPage={currentPage} currentLang={currentLang} style={style} isMobile={false} toggleMenu={toggleMenu}/>
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
                  <Link onClick={toggleMenu} to={Utils.resolveLangPageUrl(currentLang, Config.pages.home)} >
                    <Logo />
                  </Link>
                </div>
                <div className={style.closeIcon}>
                    <IconClose onClick={toggleMenu} />
                </div>
            </div>

            <div className={style.menusContainers}>
            <ul>
              <li>
                <Link  
                  onClick={toggleMenu}
                  onKeyDown={handleKeyDown}
                  className={toggleActive(Config.pages.home)}  
                  to={Utils.resolveLangPageUrl(currentLang, Config.pages.home)}>
                    Home
                </Link>
              </li>
              <li className={style.withDropdown} >
                <Link className={toggleActive(Config.pages.article)} to="#">
                  Work 
                </Link> 
                  <ul className={style.mobileDropdown}>
                    <ul className={style.mobileDropdownInner}>
                    <li className={style.mobileDropdownItem}>
                          {articles.map((article, index) => {
                          const { title, path, tags, mobileVignettes } = article.node.frontmatter
                            return (   
                              <a href={Utils.resolveLangPageUrl(currentLang, Config.pages.article, path.split('/')[path.split('/').length-1])} key={index}>
                                    <span className={`${style.mobileDropdownContainer} ${toggleActive(Config.pages.article,  path.split('/')[path.split('/').length-1])}`}>                                   
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
                                    </a>
                                  )
                            })}
                        
                      </li>
                    </ul>
                  </ul>
              </li>
              <li>
                <Link 
                  onClick={toggleMenu}
                  onKeyDown={handleKeyDown}
                  className={toggleActive(Config.pages.about)} 
                  to={Utils.resolveLangPageUrl(currentLang, Config.pages.about)}>
                    About
                </Link>
              </li> 
              <li>
                <a href={currentLang ? ResumeJp : ResumeEn} target="_blank"　rel="noreferrer">Resumé</a>
              </li> 
              <li>
                <a href={`mailto:${Config.email}`} target="_blank"　rel="noreferrer">Contact</a>
              </li>
            </ul>               
            <div className={style.MobilelanguageContainer}>
                <LangSwitcher currentPage={currentPage} currentLang={currentLang} style={style} isMobile={true} toggleMenu={toggleMenu}/>
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
          filter: { fileAbsolutePath: { regex: "/index.mdx$/" } }
        ) {
          edges {
            node {
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


