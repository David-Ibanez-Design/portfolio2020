/* Vendor imports */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

/* App imports */
import style from './suggested-articles.module.scss'
import Next from '../../images/icons/Icon-Next'
import TagList from '../../components/tag-list'
import Utils from '../../utils'
import Config from '../../../config'
import Tooltip from "../../components/tooltip";

const SuggestedPosts = ({ currentLang, articles }) => {

  const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

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

  return(
      <div className={style.container}>
      
      <div className={style.innerContainer}>
        <h2 className={style.title}>
          <Next />
          NEXT UP
        </h2>
      </div>
      <div className={style.bannerContainer}>
        <div className={style.bannerBg}>
          <Link className={`${style.innerContainer} ${style.nextArtContainer}`} to={Utils.resolveLangPageUrl(currentLang, Config.pages.article, path.split('/')[path.split('/').length-1])}>
              <div className={style.imageContainer}>
                <div className={style.innerImage} data-tip data-for="viewProject">
                  <div className={style.image} >
                      <Img
                      fluid={WinWidth > 1035 ? suggestedArt.childImageSharp.fluid : coverHomepage.childImageSharp.fluid}
                      
                      alt={title}
                    />
                  </div>
                  <Tooltip targetId="viewProject" effect="float" hidePointer="hidePointer" data-offset="{'top': 0}">
                            {!currentLang ? "View case study" : "見る"}
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
                    <p>View case study</p>
                  <div className={style.iconArrow}>
                    <div className={style.iconArrowRect}></div>
                    <div className={style.iconArrowHead}></div>    
                  </div>
                  </div>
                </div>
            </div>      
          </Link>
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
