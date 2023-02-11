/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jef Mayer`,
    description: `Jef Mayer is a Tucson-based creative and digital technology consultant focusing on website development and designing interactive experiences`,
    author: `@jefmayer`,
    siteUrl: `https://www.jefmayer.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jefmayer-gatsby-portfolio`,
        short_name: `Jef Mayer`,
        start_url: `/`,
        background_color: `rgb(21, 20, 20)`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`,
      },
    },
  ],
}
