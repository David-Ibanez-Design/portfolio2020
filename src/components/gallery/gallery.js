/* Vendor imports */
import React from 'react'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
/* App imports */
import style from './gallery.module.scss'


// Masory Options
 const masonryOptions = {
    fitWidth: true,
    columnWidth: 1,
    gutter: 32,
    itemSelector: ".photoItem",
  };
  


  const Gallery = (images) => {

    return (

            <Masonry
                className={"photoList"}
                elementType={"div"}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}
            >
 
            {images.images.map((photo, index) => (
                <div key={index} className={"photoItem"}>
                    <Img fluid={photo.node.childImageSharp.fluid} alt="test" />
                </div>
            ))}
            <div className={style.overlay}></div>
            </Masonry>

    );
  };
  
  export default Gallery;