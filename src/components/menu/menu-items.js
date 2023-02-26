import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { BiChevronDown } from 'react-icons/bi'
/* App imports */
import style from './menu.module.scss'
import Img from 'gatsby-image'
import LocalizedLink from '../localizedLink'
import useTranslations from "../useTranslations"
import { LocaleContext } from "../layout"
import locales from "../../../config/i18n"
import Config from '../../../gatsby-config'
import ResumeJp from '../../downloads/Resume-jp.pdf'
import ResumeEn from '../../downloads/Resume-en.pdf'
import TagList from '../tag-list'

const MenuItems = ({data, isMobile , withWork, toggleMenu}) => {

    const { locale, isArt, localizedPath } = React.useContext(LocaleContext)
    const t = useTranslations()
    const localIsJa = locale === "ja"
    const articles = data.filter(function( obj ) {return obj.node.fields.locale === locale;});

    function toggleActive(page){  
        const isIndex = page === `/`       
        const localizedSlug = locales[locale].default ? page : `${locales[locale].path}${isIndex ? `` : `${page}`}`
        return localizedPath === localizedSlug  ? style.active : null;
    }

    function disableHover(){
      var dropdownMenu = document.getElementsByClassName("desktopDropdown");
      dropdownMenu[0].classList.add('disableHover').classList.remove('disableHover')
    }

    return (
        <div className={style.menuItems}>
            <ul>
                {/* Homepage */}
                <li>
                    <LocalizedLink onClick={toggleMenu} className={toggleActive("/")} to={`/`}>{t.menu.home}</LocalizedLink>
                </li>

                {/* Work */}
                {withWork ? (
                    <li className={`${style.withDropdown} desktopDropdown`} >
                        <Link className={isArt ? style.active : null} to="#">
                            {t.menu.work} 
                            <BiChevronDown size="20" className={style.dropndownIcon}/>
                        </Link> 
                        <ul className={!isMobile ? style.desktopDropdown : style.mobileDropdown}>
                            <ul>
                                <li>
                                    {articles.map((article, index) => {
                                        const { title, tags, menuVignettes, mobileVignettes } = article.node.frontmatter
                                        return (
                                                <LocalizedLink 
                                                    onClick={isMobile ? toggleMenu : disableHover}
                                                    key={index}
                                                    to={`/${article.node.parent.relativeDirectory}`} 
                                                    className={`${style.containerLink} ${toggleActive(`/${article.node.parent.relativeDirectory}`)}`}>       
                                                    <span key={index} className={style.mobileDropdownContainer} >                               
                                                        <span>
                                                            <Img
                                                            className={style.preview}
                                                            fluid={!isMobile ? menuVignettes.childImageSharp.fluid : mobileVignettes.childImageSharp.fluid}
                                                            alt={title}
                                                            />
                                                            {!isMobile ? (
                                                                <span className={style.content}>
                                                                    <TagList tags={tags} type="small"/>
                                                                    <p>{title}</p>
                                                                </span>
                                                            ) : (
                                                                <>
                                                                    <span className={style.content}>
                                                                        <TagList limit={2} tags={tags} type="small"/>
                                                                    </span>
                                                                    <span className={style.contentTitle}>
                                                                        {title}
                                                                    </span>
                                                                </>
                                                            )}
                                                        </span>
                                                    </span>
                                                </LocalizedLink>
                                        )
                                    })}
                                </li>
                            </ul>
                        </ul> 
                    </li>
                ) : null}


                {/* About */}
                <li>
                    <LocalizedLink 
                        onClick={toggleMenu}
                        className={toggleActive("/about")} 
                        to={`/about`}
                    >
                        {t.menu.about} 
                    </LocalizedLink>
                </li> 

                {/* Resume */}
                <li>
                    <a className={style.externalLinks} 
                        href={localIsJa ? ResumeJp : ResumeEn} 
                        target="_blank"　
                        rel="noreferrer"
                    >
                        {t.menu.resume}
                    </a>
                </li> 

                {/* Contact */}
                <li>
                    <a className={style.externalLinks} 
                        href={`mailto:${Config.siteMetadata.email}`} 
                        target="_blank"　
                        rel="noreferrer"
                    >
                        {t.menu.contact}
                    </a>
                </li>
        </ul> 
      </div>
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
                    ...articleFields
                    order
                    menuVignettes {
                      childImageSharp {
                        fluid(maxWidth: 174) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                    mobileVignettes {
                      childImageSharp {
                        fluid(maxWidth: 260) {
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
       render= {data  => ( <MenuItems data={data.allMdx.edges} {...props}/> )}
      />
    )
  
    }

MenuItems.defaultProps = {
    isMobile: false,
    withWork: true
}