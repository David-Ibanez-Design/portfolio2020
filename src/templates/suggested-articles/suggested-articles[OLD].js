/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
/* App imports */
import ArticleList from '../../components/article-list'
import style from './suggested-articles.module.scss'


const SuggestedPosts = ({ currentLang, articles }) => (
  <div className={style.container}>
    <h2 className={style.title}>Next Up</h2>
    <ArticleList currentLang={currentLang} articles={articles} />
  </div>
)

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
