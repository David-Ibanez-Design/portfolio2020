const plugins = require('./gatsby-config.plugins');

module.exports = {
  // pathPrefix: '/gatsby-starter-developer-blog',
  // pathPrefix: '/public',
  siteMetadata: {
    siteUrl: "https://davidibanez.com",
    title: "UI/UX Portfolio",
    description: "UI/UX Portfolio",
    email: 'dibanez@rocketmail.com',
    social: {
      dribbble: 'https://dribbble.com/DavidDesign38',
      linkedin: 'https://www.linkedin.com/in/david-ibanez-a5b443120/'
    },
  },

  plugins,
} 