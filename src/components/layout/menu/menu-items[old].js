import React from 'react';
import { Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
/* App imports */
import TagList from '../../tag-list'
import Config from '../../../../config'
import Utils from '../../../utils'
import ResumeJp from '../../../downloads/Resume-jp.pdf'
import ResumeEn from '../../../downloads/Resume-en.pdf'
import { BiChevronDown } from 'react-icons/bi'
import style from './menu.module.scss'


const MenuItems = ({ data, toggleMenu, handleKeyDown, currentLang, currentPage, isMobile="" }) => {

  
        const articles = data;


        // function GetCurrentArt(articles, currentPage){
      
        //   for (var i = 0; i < articles.length; i++) {
        //     if("/" + articles[i].node.frontmatter.path === currentPage){
        //         return articles[i];
        //     }
        //   }
        // } 


        function toggleActive(pageLangUrl, articleTitle=""){      
          
          let finalUrl = Utils.resolveLangPageUrl(currentLang, pageLangUrl, articleTitle);
          let isArticle = currentPage.includes(Config.pages.article);
          if(currentPage === finalUrl || (articleTitle === "" && isArticle && pageLangUrl === Config.pages.article) ){
            return style.active
          }
        }

        

        // function setActiveScroll(pageLangUrl, articleTitle=""){      
          
        //   // Check if the current page is an article page
        //   let finalUrl = Utils.resolveLangPageUrl(currentLang, pageLangUrl, articleTitle);
        //   let isArticle = currentPage.includes(Config.pages.article);
        //   if(articleTitle === "" && isArticle && pageLangUrl === Config.pages.article){

        //     let currentArt = GetCurrentArt(articles, currentPage);

        //     // Calculate scroll based on order
        //     let currentOrder = currentArt.node.frontmatter.order;
        //     let artW = 260
        //     let artP = 24
        //     let nudge = 0

        //     currentOrder === 1 ? 
        //     nudge = artW/2 
        //     : 
        //     (
        //       nudge = ( (artW * (currentOrder-1)) + (artP * (currentOrder-1)) ) + (artW/2)
        //     )
        //     return nudge;
        //   }
        // }


        // const ref = useRef(null);
        // useEffect(function() {
        //   if(isMobile){
        //     // ref.current.scrollLeft = setActiveScroll(Config.pages.article);
        //   }

        // }, []);

        return (
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
                  {!isMobile ? <BiChevronDown size="20" className={style.dropndownIcon}/> : null}
                </Link> 
              
                {/* Desktop Dropdown Menu */}
                {!isMobile ? 
                (
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
                ) 
                :
                /* Mobile Dropdown Menu */
                (
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
                )}
              </li>
              <li>
                <Link 
                  className={toggleActive(Config.pages.about)} 
                  to={Utils.resolveLangPageUrl(currentLang, Config.pages.about)}>
                    About
                </Link>
              </li> 
              <li>
                <a href={currentLang ? ResumeJp : ResumeEn} target="_blank"　rel="noreferrer">Resume</a>
              </li> 
              <li>
                <a href={`mailto:${Config.email}`} target="_blank"　rel="noreferrer">Contact</a>
              </li>
            </ul> 

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
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  mobileVignettes {
                    childImageSharp {
                      fluid(maxWidth: 260, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }                  
                }
              }
            }
          }
        }
    `}
     render={data => ( <MenuItems  data={data.allMdx.edges} {...props}/> )}
    />
  )

  }
