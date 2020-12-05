import React from "react"
import {I18nextProvider, useTranslation} from 'react-i18next';
import Layout from '../components/layout';
import i18n from '../i18next';

const PageNotFound = (pageContext) => {

    const {t} = useTranslation()
  return (
    <Layout>
          <h1>{t('siteMetadata.title')}</h1>
    </Layout>
  )
}

export default PageNotFound