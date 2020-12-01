/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
/* App imports */
import './tag-list.scss'
import style from './tag-list.module.scss'
import Config from '../../../config'
import Utils from '../../utils'

const TagList = ({ tags, type="medium", limit=""}) => {

  const tagCount = tags.length;

  return(
    <span className={`${style.tags}`}>
    {tags
      .filter((tag, index) =>limit !== "" ? index < limit :  index === tags.indexOf(tag)) // Remove duplicate values
      .sort()
      .map((tag, index) => (
        <React.Fragment key={index}>
          <span key={tag} className={`${style.tag} ${tag} ${type ? style[type] : ""}`}>
              {Config.tags[tag].name || Utils.capitalize(tag)}
          </span>
        
          { limit !== "" && index === limit-1 ? (
            <span key={index} className={`${style.tag} ${tag} ${style.moreTags} ${type ? style[type] : ""}`}>
                + {tagCount - limit}
            </span>
          ) : null}
        </React.Fragment>
      ))}
  </span>
  )

}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TagList
