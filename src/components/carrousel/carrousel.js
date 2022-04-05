/* Vendor imports */
import React, { useRef, useState, Component } from "react";
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import ImageZoom from '../image-zoom'
import Slider from 'react-slick';
/* App imports */
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import style from "./carrousel.module.scss";

const Carrousel = ({  containerType, containerWidth, images, className, captions, withZoom }) => {
    function NextArrow(props) {
        const { onClick } = props;
        return (
          <div onClick={onClick} className={`${style.arrows} ${style.arrowNext}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
                <polygon fill="#335267" fill-rule="evenodd" points="8.59 16.59 13.17 12 8.59 7.41 10 6 16 12 10 18" transform="translate(-8 -6)"/>
            </svg>  
         </div>
        );
      }
      
      function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div onClick={onClick} className={`${style.arrows} ${style.arrowPrev}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12">
                <polygon fill="#335267" fill-rule="evenodd" points="15.41 16.59 10.83 12 15.41 7.41 14 6 8 12 14 18" transform="translate(-8 -6)"/>
            </svg>    
        </div>
        );
      }


    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        pauseOnHover: true,
        autoplaySpeed: 5000,
        speed: 500,
        centerPadding: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

    return (
        <div className={style.wrapper}>
            <Slider  {...settings}>
            {images.map((slides, index) => (
                <div className={style.slide}>
                    {console.log(slides.link)}
                    <ImageZoom image={slides.link.fluid} />
                    <caption className={style.sliderCaption}>{slides.cation}</caption>
                </div>
            ))}
            </Slider>
        </div>
 
        // <>  
        // {
        //    <div>
        //         <div className="slide-container">
        //             <Slide {...properties}>
        //                 {images.map((fluid, index) => (
        //                 <div key={index} className="each-slide">
        //                     <Img key={index} fluid={fluid} />
        //                 </div>
        //                 ))}
        //             </Slide>
        //         </div>
        //         <div className="slide-container buttons">
        //         <button type="button">
        //             Go Back
        //         </button>
        //         <button type="button">
        //             Go Next
        //         </button>
        //         </div>
        //    </div> 

           
        // }
        // </>

    )
}

Carrousel.propTypes = {
    containerType: PropTypes.oneOf(['contained', 'full']),
    containerWidth: PropTypes.oneOf(['Md', 'Lg', 'Xl','XXl']),
    captions: PropTypes.string,
    withZoom: PropTypes.bool
}
  
Carrousel.defaultProps = {
    containerWidth: 'Md',
    containerType: 'contained',
    withZoom: false
}

export default Carrousel
