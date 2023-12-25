module.exports = [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 90
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "${__dirname}/src/styles/index";`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Luigi Colella Blog',
        short_name: 'Luigi Colella',
        start_url: '/',
        background_color: '#0C2744',
        theme_color: '#0C2744',
        display: 'standalone',
        icon: 'src/images/icons/di-logo-image.png', // This path is relative to the root of the site.
        legacy: true, // this will add apple-touch-icon links to <head>. Required for versions prior to iOS 11.3.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `Mdx`,
        path: `${__dirname}/content`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config/translations`,
        name: `translations`,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              quality: 90,
              disableBgImage: true,
              backgroundColor: "none",
              showCaptions: true,
              linkImagesToOriginal: false,
              disableBgImageOnAlpha: true
            },
          },
          `gatsby-remark-copy-linked-files`
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `UA-186412640-1`, // github pages
         trackingId: `UA-186317316-1`, // Surge
      },
    },
    {
      resolve: "gatsby-plugin-guess-js",
      options: {
        // Find the view id in the GA admin in a section labeled "views"
        GAViewID: `235033551`, // Surge
        // Add a JWT to get data from GA
        jwt: {
          client_email: `portfolio-guessjs@portfolio-300700.iam.gserviceaccount.com`,
          private_key: `-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDS5KKcacpxpkhx\nFueTNjy3aaZ6t2YJzfWbS7TouTBDmtUFlnOuZfg43NK6qCbwUgzSUgRnZd2GcVsU\nDAcjZN4cMg1EHC4GWrcet8nVSpfUPKLJxOZ9+Vs0DZNMVC26MB4+IAidNAygMPN+\njGeUgS8lgm8Bl5IlyFCA/NJ3M5F9Mx32/PaDmJTTZZfRWxQ+XlKMPvE1w6qypIB1\n/hrqM1mnjBFFK8lJv3xhmZWZCO502ZF4cDMy1cUU550a8CoRxRLjLV8j/S6f0AHC\nkOpa6xBaCoILN8mWl5s8SlVYfnV6TQN1hfBqr6nRBiF3TV+I/8tQY87cVcmiao8w\nwcu4Vj0FAgMBAAECggEAZDZs5vKGVnbzmXmO1S9Crs0vZMTdYe9StFbHQoctXhKn\nAx65HbgquaqFIFljF3OF0DNVEGUhXQ9kfiQxCCqYOMG3+BOD81UMCza+W/I0L5AY\nstQzyszA//0rb2vYxs6ysEa8kSb4kO5x5kKFvdWdN6/BW/pQYk/LoV+CC06f5eOV\nmFb9+rUb6I/AcvQJGF6RwIrG8tKr5865nxH6Fj3XX+vz1yfKHAfAeW9MJbbD2FMC\n1Q0zpomZmG0Wiex3jKJ7smJ2UD/yOl3cu0mEUm+OJC3u0VBSSyO1NOpcNk0ZO1VB\nTjBrP0oMyXa+yltd9+XUXx0asPnHpJ77rZFMp5POCQKBgQDo0ROMAyRkDcXMi/u5\n6WsBACoztK0xxOK6L5vnC/aP7JeVm5zI/N4/9PKKDTR0Zw/7Hq6DMP6QAjBrCVzb\nCZsQuOXBtzpXRgiCc4wb1L+HoZLdWsk6KyhuqrNX7QVOHs4iGvnNKLePxiG/vaEw\nTh14p61+hIvovkopUjozzptmRwKBgQDn5K+sWYeNgDr0RMKbDlcDwax6DQTK4d1y\n+JKP3oBH3b/TN4+dkx277f6L7JwONaY/GUJMXI0CQRshos4r0rLCrhWhDWsswhh1\nlStyJL4mB0zr/8x9Z6tYOvuuQHhA2oNt3IwX0TlJ+LZg1BNECKBLWf9xt5Xaycy2\nMc+RyjFMUwKBgQCI2Ow+blJjpVzQwK90Nem5qtkjj14GVQ5YFkfzZSrGqnDndZKQ\n6WHSAi7WSrC8gx/3oa8+WfwntcG0CMrVzS2ihKw4U3Ute3LhCv4eFc2G8cgb6JND\nZ77aXegRFLb7lkvf7C9NElPjZLjNta8bb68PDrCCH3MFmWSKKVUgwp7BXQKBgQC7\n+3epiJ5JSAUClWcImVRSmEMAYeNbsEN7eyQcequVFp71U1oZy/PTr7ekqHdNUZJm\nHkzPaEtq42piFv95KQF+re6csysJioKXdwhULJL0cwCZY7DajBqrmI0EEgEp2bmn\nap0qhZIic/ssfV7szO1ciCV6gu95ABPyMmjo73aNPwKBgQC7/PYVZIKZsr5cFLXG\nEJx1BpLCTpMEsAW3O5Do2J+gKZIWaA6/rzoyXn3nroTLonyXqiUT50Cl5qQK9hYc\nwAq0HBBjeOwH8OvQvLdH3DPCF5EVgrJtISfU/Ae+eDkZm5r/HJ4ZsyNvYXdWtgN4\nbceCAQhrs16N7BAkdtoAvvokzQ==\n-----END PRIVATE KEY-----\n`,
        },
        minimumThreshold: 0.03,
        // The "period" for fetching analytic data.
        period: {
          startDate: new Date("2020-1-1"),
          endDate: new Date(),
        },
      }
    }
]