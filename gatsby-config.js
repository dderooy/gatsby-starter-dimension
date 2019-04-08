module.exports = {
  siteMetadata: {
    title: "David DeRooy - Business Card Website",
    author: "David DeRooy",
    description: "A Business Card Website"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'David DeRooy - Business Card',
        short_name: 'Business Card',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/code-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-20950808-2",
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
