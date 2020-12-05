import React from "react"
import {I18nextProvider, useTranslation} from 'react-i18next';
import Layout from '../../components/layout';
import i18n from '../../i18next';

const AboutPage = (pageContext) => {

    const {t} = useTranslation()

  return (
    <Layout>
          <I18nextProvider i18n={i18n}>
          <h1>{t('siteMetadata.title')}</h1>
          <h2>test</h2>
          </I18nextProvider>

    </Layout>
  )
}

export default AboutPage