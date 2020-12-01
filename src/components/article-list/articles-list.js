/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import style from './article-list.module.scss'
import TagList from '../tag-list'
import Utils from '../../utils'
import Config from '../../../config'
import Tooltip from "../../components/tooltip";

const ArticleList = ({ articles, currentLang }) => {
  return (
    <div className={style.container}>

    {articles.map((article, index) => {
      const { title, path, tags, coverHomepage } = article.node.frontmatter
      return (
        <div key={title} className={style.article}>
          <div className={style.cover} data-tip data-for="viewProject" currentitem="false">          
            <Link to={Utils.resolveLangPageUrl(currentLang, Config.pages.article, path.split('/')[path.split('/').length-1])}>
              <Img
                fluid={coverHomepage.childImageSharp.fluid}
                alt={title}
              />
            </Link>
            <Tooltip targetId="viewProject" effect="float" hidePointer="hidePointer" data-offset="{'top': 0}">
                    {!currentLang ? "View case study" : "見る"}
            </Tooltip>
          </div>

          <div className={style.content}>      
              <Link to={Utils.resolveLangPageUrl(currentLang, Config.pages.article, path.split('/')[path.split('/').length-1])}>
                <div className={style.tagList}>
                  <TagList tags={tags} />
                </div>
                <h3><span>{title}</span></h3>
                {/* <p>View Case study</p> */}
              </Link>

          </div>
        </div>
      )
    })}
  </div>
  )

}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          date: PropTypes.string,
          path: PropTypes.string.isRequired,
          tags: PropTypes.arrayOf(PropTypes.string).isRequired,
          coverHomepage: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }),
      }),
    })
  ),
}

export default ArticleList
