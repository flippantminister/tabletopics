/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  	{
        resolve: `gatsby-source-wordpress`,
        options: {
            // Specify the URL of the WordPress source
            baseUrl: `tabletopics.infomedia.dev/`,
            protocol: `https`,
            // Indicates if a site is hosted on WordPress.com
            hostingWPCOM: false,
            // Specify which URL structures to fetch
            includedRoutes: [
              '**/posts',
              '**/tags',
              '**/categories'
            ]
        }
    }
  ],
}
