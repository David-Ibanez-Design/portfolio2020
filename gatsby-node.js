/* Vendor imports */
const path = require('path');
/* App imports */
const config = require('./gatsby-config');
const utils = require('./src/utils');

exports.onCreatePage = async ({page, actions: {createPage, deletePage} }) => {

  console.log(page)
  await deletePage(page);

  await Promise.all(
    config.siteMetadata.supportedLanguages.map(async lang => {
      const originalPath = page.path;
      const localizedPath = `/${lang}${page.path}`;

      await createPage({
        ...page,
        path: localizedPath,
        context: {
          ...page.context,
          originalPath,
          lang,
        },
      });
    })
  );
  

};

