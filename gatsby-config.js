module.exports = {
  siteMetadata: {
    title: "Steph Davidson",
    author: "Steph Davidson",
  },
  plugins: [
    "gatsby-plugin-page-transitions",
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 500,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 1800,
            },
          },
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1800,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
