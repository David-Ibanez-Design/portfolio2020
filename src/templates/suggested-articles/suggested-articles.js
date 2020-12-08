/* Vendor imports */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

/* App imports */
import style from './suggested-articles.module.scss'
import Next from '../../images/icons/Icon-Next'
import TagList from '../../components/tag-list'
import Tooltip from "../../components/tooltip";
import LocalizedLink from '../../components/localizedLink'
import useTranslations from "../../components/useTranslations"

const SuggestedPosts = ({articles }) => {

    // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const t = useTranslations()

  const hasWindow = (typeof window !== 'undefined') ? true : false;
  const getWidth = () => hasWindow ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : null;
  // || document.documentElement.clientWidth 
  // || document.body.clientWidth;

  function useCurrentWidth() {
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth());

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
      const resizeListener = () => {
        // change width from the state object
        setWidth(getWidth())
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);

      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
      }
    }, [])

    return width;
  }

  let WinWidth = useCurrentWidth();
  const { title, path, tags, suggestedArt, coverHomepage } = articles[0].node.frontmatter

  function getImg(WinWidth){
    if(WinWidth > 1035){
      return suggestedArt.childImageSharp.fluid
    }else{
      return coverHomepage.childImageSharp.fluid
    }
  }

  return(
      <div className={style.container}>
      
      <div className={style.innerContainer}>
        <h2 className={style.title}>
          <Next />
         {t.suggestedArt.next}
        </h2>
      </div>
      <div className={style.bannerContainer}>
        <div className={style.bannerBg}>
          <LocalizedLink className={`${style.innerContainer} ${style.nextArtContainer}`} to={`/${articles[0].node.parent.relativeDirectory}`}>
              <div className={style.imageContainer}>
                <div className={style.innerImage} data-tip data-for="viewProject">
                  <div className={style.image} >
                      <Img fluid={hasWindow ? getImg(WinWidth) : null} alt={title}
                    />
                  </div>
                  <Tooltip targetId="viewProject" effect="float" hidePointer="hidePointer" data-offset="{'top': 0}">
                            {t.suggestedArt.viewCaseStudy}
                  </Tooltip>
                <div className={style.shadow}></div>
                </div>
              </div>
              <div className={style.textContainer}>
                <div className={style.innerText}>
                  <div className={style.tags}>
                    <TagList tags={tags} />
                  </div>
                  <h2 className={style.artTitle}>
                    <span>{title}</span>
                  </h2>
                  <div className={style.more}>
                    <p>{t.suggestedArt.viewCaseStudy}</p>
                  <div className={style.iconArrow}>
                    <div className={style.iconArrowRect}></div>
                    <div className={style.iconArrowHead}></div>    
                  </div>
                  </div>
                </div>
            </div>      
          </LocalizedLink>
        </div>

      </div>
    </div>
  )

}

SuggestedPosts.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      edge: PropTypes.shape({
        node: PropTypes.object,
      }),
    })
  ).isRequired,
}

export default SuggestedPosts
