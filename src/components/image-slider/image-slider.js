/* Vendor imports */
import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';/* App imports */
import style from './image-slider.module.scss'
import content from '../../templates/article-content/article-content.module.scss'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const ImageSlider = ({afterKey, beforeKey, captions}) => {

    const Handles = () =>{
        return (
           <div className={style.containerHandles}>
               <div className={style.blurredBg}></div>
               <div className={style.handlesArrows}>
                    <BiChevronLeft  className={style.arrowLeft} size="24"/>
                    <BiChevronRight className={style.arrowRight} size="24"/>
               </div>
           </div>   
        )
    }
    
        return (   
            <div className={content.fullBleedContainer}>
                <div className={style.sliderContainer}>
                    <ReactCompareSlider
                        handle={<Handles />}
                        itemOne={<ReactCompareSliderImage 
                            className={style.imageBefore}
                            src={beforeKey.fluid.src} 
                            srcSet={beforeKey.fluid.srcSet} 
                            alt="Image one"
                        />}

                        itemTwo={<ReactCompareSliderImage 
                            className={style.imageAfter}
                            src={afterKey.fluid.src} 
                            srcSet={afterKey.fluid.srcSet} 
                            alt="Image two" 
                        />}
                    />
            </div>
            {captions ? <figcaption className={content.caption}>{captions}</figcaption> : null}
          </div> 
        )
}

export default ImageSlider;
