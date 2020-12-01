/* Vendor imports */
import React, {useState} from 'react'
import { IoIosArrowDropup } from 'react-icons/io';
import Tooltip from "../../components/tooltip";

/* App imports */
import style from './scroll-top.module.scss'

const ScrollTop = () => {

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

    window.addEventListener('scroll', checkScrollTop)

    return (
        <>
            <IoIosArrowDropup 
                data-tip data-for="backToTop" 
                className={style.scrollTop} onClick={scrollTo} 
                style={{height: 40, display: showScroll ? 'block' : 'none'}}
            />
            <Tooltip targetId="backToTop" place="left" effect="solid">Scroll to the top</Tooltip>
        </>
        
    )   
}

export default ScrollTop