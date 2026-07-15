import React from 'react'
import style from '../../templates/article-content/article-content.module.scss'

const CodeCaption = ({ children }) => (
  <p className={style.caption}>{children}</p>
)

export default CodeCaption
