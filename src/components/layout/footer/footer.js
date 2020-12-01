/* Vendor imports */
import React from 'react'
import { FaDribbble, FaLinkedin } from 'react-icons/fa'
import { Link } from 'gatsby';
/* App imports */
import style from './footer.module.scss'
import Utils from '../../../utils'
import Config from '../../../../config'
import Buttons from '../../../components/button'
import LangSwitcher from "../../layout/menu/lang-switcher"
import ResumeJp from '../../../downloads/Resume-jp.pdf'
import ResumeEn from '../../../downloads/Resume-en.pdf'



const Footer = ({currentLang}) => {

  let currentPage = "/"
  if(typeof window !== `undefined`) {
    currentPage = window.location.pathname
  }


  function toggleActive(pageLangUrl){      
    let finalUrl = Utils.resolveLangPageUrl(currentLang, pageLangUrl);
    if(currentPage === finalUrl){
      return "active"
    }
  }

  return (
    <>
      <div className={`${style.container} ${currentPage.includes(Config.pages.article) === false ? "mt-11" : null}`}>
          <div className={style.innerContainer}>
            <div className={style.menusContainer}>
              <div className={style.contactInfo}>
              <h6>Get In Touch</h6>
              <h1>Let’s work together</h1>
              <p className={style.outro}>
              I’m currently looking to join an existing design team in a company that trusts the design process to deliver meaningful and measurable changes to their customers.
              </p>
              <Buttons destination="external" to={`mailto:${Config.email}`} buttonStyle="primary">Contact me</Buttons>
              </div>
              <div className={style.menu}>
                <h6>Missing something?</h6>
                <h1>Menu</h1>
                <ul>
                <li>
                    <Link  
                      className={toggleActive(Config.pages.home)}  
                      to={Utils.resolveLangPageUrl(currentLang, Config.pages.home)}>
                        Home
                    </Link>
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
                <ul className={style.langSwitcher}>
                  <LangSwitcher currentPage={currentPage} currentLang={currentLang} isMobile={false} withFlag/>
                </ul>
              </div>
              <div className={style.socialsMobileContainer}>
                <h6>Follow me on</h6>
                <h1>Socials</h1>
                <ul>
                  <li>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={Config.social.dribbble}
                    data-tip 
                    data-for="social1"
                  >
                    Dribbble
                  </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      href={Config.social.linkedin}
                      data-tip 
                      data-for="social2"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          <div className={style.socialsContainer}>
            <ul className={style.socials}>
                <li>
                <FaDribbble size="14"/>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={Config.social.dribbble}
                    data-tip 
                    data-for="social1"
                  >
                    Dribbble
                  </a>
                </li>
                <li>
                <FaLinkedin size="14"/>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={Config.social.linkedin}
                    data-tip 
                    data-for="social2"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
              <p className={style.legals}>© 2020 All rights reserved.</p>
          </div>

          </div>
      </div>
    </>
  )
}

export default Footer
