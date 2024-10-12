module.exports = {
  siteMetadata: {
    title: `$cd ~/kuromimi`,
    author: {
      name: `@moemarusan`,
      summary: `いつもねむい`,
    },
    description: `なにか書いてる`,
    siteUrl: `https://kuromimi.moemarusan.com`,
    social: {
      twitter: `@moemarusan`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
            },
          },
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 750,
              height: 400,
            },
          },
          {
            resolve: "@weknow/gatsby-remark-twitter",
            options: {
              theme: 'dark',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              inlineCodeMarker: null,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-WNBNVDD749"], 
        pluginConfig: {
          head: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `$cd ~/kuromimi`,
        short_name: `kuromimi`,
        start_url: `/`,
        background_color: `#0D2538`,
        theme_color: `#e0245e`,
        display: `minimal-ui`,
        icon: `src/images/kuromimi-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
