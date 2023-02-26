/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
/* App imports */
import './tag-list.scss'
import style from './tag-list.module.scss'
import Utils from '../../utils'
import useTranslations from "../useTranslations"

const TagList = ({tags, type="medium", limit=""}) => {

  const t = useTranslations()
  const tagCount = tags.length;

  return(
    <span className={`${style.tags}`}>
    {tags
      .filter((tag, index) =>limit !== "" ? index < limit :  index === tags.indexOf(tag)) // Remove duplicate values
      .map((tag, index) => (
        <React.Fragment key={index}>
          <span key={tag} className={`${style.tag} ${limit ? 'MobileMenu-' : ''}${t.tags[tag].category}Tag ${type ? style[type] : ""}`}>
              {t.tags[tag].name || Utils.capitalize(tag)}
          </span>
        
          { limit !== "" && index === limit-1 ? (
            <span key={index} className={`${style.tag} ${style.moreTags} ${t.tags[tag].category}Tag ${type ? style[type] : ""}`}>
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
