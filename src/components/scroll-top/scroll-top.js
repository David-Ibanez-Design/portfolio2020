/* Vendor imports */
import React, {useState} from 'react'
import { IoIosArrowDropup } from 'react-icons/io';
import Tooltip from "../../components/tooltip";
import useTranslations from "../useTranslations"

/* App imports */
import style from './scroll-top.module.scss'

const ScrollTop = () => {

  const t = useTranslations()

      // Check if server or client is rendering
    const hasWindow = (typeof window !== 'undefined') ? true : false;
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
          setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
          setShowScroll(false)
        }
      };

    const scrollTo = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };

    if(hasWindow) {window.addEventListener('scroll', checkScrollTop)}

    return (
        <>
            <IoIosArrowDropup 
                data-tip data-for="backToTop" 
                className={style.scrollTop} onClick={hasWindow ? scrollTo : null} 
                style={{height: 40, display: showScroll ? 'block' : 'none'}}
            />
            <Tooltip targetId="backToTop" place="left" effect="solid">{t.articles.backToTop}</Tooltip>
        </>
        
    )   
}

export default ScrollTop