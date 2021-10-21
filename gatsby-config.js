/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const about = require('./data/about.json')
const cred = require('./data/blz-website-328114-883ec38b29b6.json')
const path = require(`path`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const plugins = [
  'gatsby-plugin-robots-txt',
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-offline`,
  `gatsby-transformer-json`,
  'gatsby-plugin-sass',
  `gatsby-plugin-emotion`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  // `gatsby-plugin-fontawesome-css`,
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      excludes: [`/fr/offline-plugin-app-shell-fallback/`, `/en/offline-plugin-app-shell-fallback/`, `/en/404/`, `/fr/404/`],
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: about.name,
      short_name: about.name,
      start_url: "/",
      background_color: "#fff",
      theme_color: "#0000ff",
      display: "standalone",
      icon: "static/favicon.png",
      crossOrigin: `use-credentials`,
    },
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        about.ANALYTICS_ID, // Google Analytics / GA
      ],
      gtagConfig: {
        anonymize_ip: true,
        cookie_expires: 0,
      },
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: 'data',
      path: `./data/about.json`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
  },
  {
    resolve: 'gatsby-source-google-spreadsheets',
    options: {
      spreadsheetId: '1mXcF709EEZGTTsA72tUQFFfKMnh1m9HzLmCp26kNd84',
      credentials: cred,
    }
  },
  {
    resolve: `gatsby-plugin-react-intl`,
    options: {
      path: `${__dirname}/src/intl`,
      languages: about.languages,
      defaultLanguage: about.default_language,
      ignoredPaths: [`/offline-plugin-app-shell-fallback/`, `/404/`],
      redirect: true,
    },
  }
  // {
  //   resolve: `gatsby-source-wordpress`,
  //   options: {
  //     url: `WP_URL`,
  //     auth: {
  //       htaccess: {
  //         username: process.env.WP_USERNAME,
  //         password: process.env.WP_PASSWORD,
  //       },
  //     },
  //     schema: {
  //       requestConcurrency: 5,
  //       previewRequestConcurrency: 2,
  //     }
  //   },
  // },
];

module.exports = {
  plugins,
  siteMetadata: {
    siteUrl: about.URL,
    title: about.title,
    description: about.description,
  },
};
