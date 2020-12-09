// Only one item MUST have the "default: true" key
module.exports = {
  en: {
    path: `en`,
    locale: `en-US`,
    default: true,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `Using i18n with Gatsby`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`,
  },
  ja: {
    path: `ja`,
    locale: `ja`,
    default: false,
    dateFormat: `DD.MM.YYYY`,
    siteLanguage: `ja`,
    ogLanguage: `ja`,
    defaultTitle: `i18n mit Gatsby nutzen`,
    defaultDescription: `Gatsby Beispielseite, die MDX und i18n (frei von dependencies) nutzt`,
  },
}