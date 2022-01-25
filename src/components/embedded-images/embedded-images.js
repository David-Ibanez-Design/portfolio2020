/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import ImageZoom from '../image-zoom'
/* App imports */
import style from '../../templates/article-content/article-content.module.scss'

const Images = ({ containerType, containerWidth, name, className, captions, withZoom }) => {

    return (
        <>  
            {containerType !== "full" ? 
            /* Contained images */
              
            <div className={`${style["contained" + containerWidth]} ${className ? className : ""}`}>
                <div className={style.imageWrapper}>
                    {
                        withZoom ? <ImageZoom image={name.fluid}/> : <Img fluid={name.fluid} alt="Image for the end of article test"/>  
                    } 
                </div>
                {captions ? <figcaption className={style.caption}>{captions}</figcaption> : null }
            </div>
            
            : 

            /* Full width images */
            (           
                name.length > 1 ? 
                       
                            <div className={style.fullBleedContainer}>
                                <div className={`${style.fullBleed} ${className}`}>
                                    <div className={`${style["fullBleedInner" + name.length]} ${className} ${style["contained" + containerWidth]} imageWrapper`}>
                                        {  name.map((item, index) =>
                                            <Img className={style["col" + name.length]} key={index} fluid={item.fluid} alt="Image for the end of article"/> 
                                        )}
                                    </div>
                                </div>
                                {captions ? <figcaption className={style.caption}>{captions}</figcaption> : null}
                            </div>
                    
                    : 
                    
                        <div className={style.fullBleedContainer}>
                            <div className={`${style.fullBleed} ${className}`}>
                                <div className={`${style["contained" + containerWidth]} ${className ? className : ""} ${style.imageWrapper}`}>
                                {
                                 withZoom ? <ImageZoom image={name.fluid}/> :<Img fluid={name.fluid} alt="Image for the end of article"/> 
                                }        
                                </div>
                            </div>
                            {captions ? <figcaption className={style.caption}>{captions}</figcaption> : null}
                        </div>
                    
            )
        }
        </>

    )
}

Images.propTypes = {
    containerType: PropTypes.oneOf(['contained', 'full']),
    containerWidth: PropTypes.oneOf(['Md', 'Lg', 'Xl','XXl']),
    captions: PropTypes.string,
    withZoom: PropTypes.bool
}
  
Images.defaultProps = {
    containerWidth: 'Md',
    containerType: 'contained',
    withZoom: false
}

export default Images
