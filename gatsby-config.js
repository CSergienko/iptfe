module.exports = {
    siteMetadata: {
        title: `I Prefer the Front End`,
        description: `The portfolio site of Chris Sergienko.`,
        author: `Chris Sergienko`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-netlify-identity-widget`,
        {
            resolve: 'gatsby-plugin-sentry',
            options: {
                dsn:
                    'https://8e96700681784cf6be5bf8bb059d7a67@sentry.io/1395926',
                environment: process.env.NODE_ENV,
                enabled: () =>
                    ['production', 'development'].indexOf(
                        process.env.NODE_ENV !== -1
                    )
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
    ]
};
