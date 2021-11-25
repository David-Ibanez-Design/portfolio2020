/* Vendor imports */
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import React, {useState} from 'react'
import Config from '../../../gatsby-config'
import IndeedLogo from "../../images/icons/indeed";
import MercariLogo from "../../images/icons/mercari";
import SlalomLogo from "../../images/icons/slalom";
import Arrow from "../../images/icons/arrow";
import Quote from "../../images/icons/quote";
import useTranslations from "../useTranslations"
import { LocaleContext } from "../../components/layout"

/* App imports */
import style from './testimonies.module.scss'

const Testimonies = ({data}) => {

    // Translation and locals variables
    const t = useTranslations();
    const {locale} = React.useContext(LocaleContext);

    // Slider initialization
    let initialPos = 0;
    if(window.innerWidth < 1420 && window.innerWidth > 821)
    { initialPos = 16}
    else if (window.innerWidth > 1420)
    { initialPos = 64}
    else if (window.innerWidth <= 821)
    { initialPos = 0}

    const slides = t.home.testimonies.testimony.length;
    const margin = 16;
    const slideW = 523; 
    const sliderW = (slideW * slides) + (margin * slides) + margin/2;

    // Check if server or client is rendering
    const hasWindow = (typeof window !== 'undefined') ? true : false;

    // Set variables
    const [offerSet, setCount] = useState(initialPos);
    const [movedLeft, setLeftPosition] = useState(false);
    const [movedRight, setRightPosition] = useState(true);
      
    const moveLeft = () => {
        setLeftPosition(true);
        setRightPosition(false);
        
        if(window.innerWidth>1000){
            setCount( ( window.innerWidth -sliderW) ); 
        }else{
            setCount( -(window.innerWidth) + (margin * 2) ); 
        }
    };

    const moveRight = () => {
        setRightPosition(true);
        setLeftPosition(false);

        if (window.innerWidth < 1420){
            setCount(16);    
        }
        else{
            setCount(initialPos);  
        }
    };

    return(
        <>
            <div className={`${style.testimonies}  ${style.container}`}>
                <h2>{t.home.testimoniesTitle}</h2>
                <p>
                    {locale === "en" ?  
                    (
                        <>
                        {t.home.testimonies.description}
                        <a target="_blank" rel="noreferrer" href={Config.siteMetadata.social.linkedin}> {t.socialsLinks.Linkedin}.</a>
                        </>
                    )
                        :
                    (
                        <>
                        {t.home.testimonies.description}
                        <a target="_blank" rel="noreferrer" href={Config.siteMetadata.social.linkedin}>{t.socialsLinks.Linkedin}</a>でご覧ください。
                        </>
                    )
                    }
                </p>
            </div>
            <div className={style.slider}>
                <div className={style.slidesContainer} style={{left: offerSet}}>
                    <div className={style.slidesInnerContainer} >
                       
                        {t.home.testimonies.testimony.map((rsl, index) => {
                            return(

                                <div className={style.slide}>

                                    {/* Quote information */}
                                    <div className={style.quote}>
                                        <p>{rsl.quote}</p>
                                    </div>

                                    {/* Author information */}
                                    <div className={style.author}>

                                        <div className={style.authorContainer}>
                                            <div className={style.pictureContainer}>
                                                <Img fluid={data[index].node.childImageSharp.fluid} alt="sss"/>
                                            </div>

                                            <div className={style.AuthorDetails}>
                                                <p className={style.name}>{rsl.name}</p>
                                                <div className={style.positionContainer}>
                                                    <div className={style.position}>{rsl.position}</div>
                                                    <div className={style.separator}></div>
                                                        {index == 0 ? <div className={style.companyLogo}><IndeedLogo/></div> : null}  
                                                        {index == 1 ? <div className={style.companyLogo}><MercariLogo/></div> : null}
                                                        {index == 2 ? <div className={style.companyLogo}><SlalomLogo/></div> : null} 
                                                        {index == 3 ? <div className={style.companyLogo}><IndeedLogo/></div> : null}              
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={style.SlideShadow}></div>
                                </div>

                            )
                        })}
                    </div>
                </div>

                {/* Background */}
                <div className={style.bgContainer}>
                    <div className={style.innerContainer}>
                        <div className={style.quote}> <Quote /> </div>
                        <div className={style.bg}></div>
                    </div>
                </div>


                {/* Slider controls */}
                <div className={style.controlsContainer}>

                   {/* Arrow left */}                 
                    <div 
                        className={`${style.arrow} ${style.arrowLeft} ${movedRight && style.arrowDisabled}`}
                        onClick={hasWindow ? moveRight : null}>  
                            <Arrow />
                    </div>

                   {/* Dots */} 
                    <div className={style.steps}>
                        <div 
                            className={`${style.stepDot} ${movedRight && style.stepDotActive}`} 
                            onClick={hasWindow ? moveRight : null}>
                        </div>
                        <div 
                            className={`${style.stepDot} ${movedLeft && style.stepDotActive}`} 
                              onClick={hasWindow ? moveLeft : null}>
                        </div>
                    </div>

                   {/* Arrow right */}    
                    <div 
                        className={`${style.arrow} ${style.arrowRight} ${movedLeft && style.arrowDisabled}`} 
                        onClick={hasWindow ? moveLeft : null}> 
                            <Arrow />
                    </div>

                </div>              
            </div>
        </>
    )
}

export default function GetTestimoniesData(props) {

    return (
      <StaticQuery
      query={graphql`
        query {
            allFile(
                filter: {relativeDirectory: {eq: "testimonies"}}) {
                edges {
                    node {
                    ...imageSmall
                        }
                    }
                }

                Luke: file(
                    relativePath: { eq: "01-Luke.png" }) {
                    ...imageXXSmall
                }

                Theo: file(
                    relativePath: { eq: "02-Theo.png" }) {
                    ...imageXXSmall
                }

                Akinori: file(
                    relativePath: { eq: "03-Akinori.png" }) {
                    ...imageXXSmall
                }

                Anderson: file(
                    relativePath: { eq: "04-Anderson.png" }) {
                    ...imageXXSmall
                }
          }
      `}
       render= {data  => ( <Testimonies data={data.allFile.edges} {...props}/> )}
      />
    )
  
}