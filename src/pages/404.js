import React from "react"
import useTranslations from "../components/useTranslations"
import Buttons from '../components/button'
import NotFound from '../images/icons/notFound'
import style from './404.module.scss'

const PageNotFound = () => {

  const t = useTranslations()

  return (
      <div className={`${style.container} ${['container-md mt-13']}`}>
        <NotFound/>
        <h1>{t.notFound.title}</h1>
        <p>{t.notFound.description}</p>
        <Buttons to={`/`} buttonStyle="primary">{t.notFound.backBtn}</Buttons>     
      </div> 
  )
}

export default PageNotFound