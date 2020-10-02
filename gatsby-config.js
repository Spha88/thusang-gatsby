/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Thusang Social Center`,
    description: `A non-profit organisation established to provide support services to individuals and families affected by gender-based violence and femicide. We are based in Aliwal North, in the Eastern Cape province of South Africa.`,
    author: `S. Mehlomakulu, mr.smehlomakulu@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
          'raleway:100,200,300,400,500,600,700',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thusang Social Center`,
        short_name: `ThusangSC`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#a30000`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/images/favi_icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
