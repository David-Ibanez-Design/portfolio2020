const plugins = require('./gatsby-config.plugins');

module.exports = {
  // pathPrefix: '/gatsby-starter-developer-blog',
  // pathPrefix: '/portfolio2020',
  siteMetadata: {
    siteUrl: "https://davidibanez.design",
    title: "UI/UX Portfolio",
    description: "UI/UX Portfolio",
    email: 'dibanez@rocketmail.com',
    social: {
      dribbble: 'https://dribbble.com/dibanez',
      linkedin: 'https://www.linkedin.com/in/david-ibanez-a5b443120/'
    },
  },

  plugins,
}