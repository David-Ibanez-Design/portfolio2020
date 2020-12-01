/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
/* App imports */
import TagList from '../../components/tag-list'
import style from './article-heading.module.scss'

const Heading = ({ title, tags, imgArticle, coverTitle }) => (
 
  <div className={style.header}>
    <div className={style.tagList}>
      <TagList tags={tags} />
    </div>
    <div className={style.title}>
      <h1>{title}</h1>
    </div>
    <div className={style.cover}>
      <Img fluid={imgArticle} title={coverTitle} alt={title} />
    </div>
  </div>
)

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  imgArticle: PropTypes.object.isRequired,
  coverTitle: PropTypes.string,
}

export default Heading
