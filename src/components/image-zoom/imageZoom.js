/* Vendor imports */
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import Img from 'gatsby-image'

/* App imports */
import './imageZoom.module.scss'

const ImageZoom = ({ image, sideBySide }) => {

  return(
    <>
      {sideBySide ? (
        <div style={{
            flex: '50%' + '1',
            margin: '0 16px'
            }}>
          <Zoom zoomMargin={42}>
            <Img fluid={image} alt="Image for the end of article test"/>
          </Zoom>
        </div>

      )  :  (
        <Zoom zoomMargin={42}>
          <Img fluid={image} alt="Image for the end of article test"/>
        </Zoom>
          )  

      }
    </>
  )
}

export default ImageZoom
