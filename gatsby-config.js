module.exports = {
  siteMetadata: {
    title: 'Edmundo Santos',
    author: 'Edmundo Santos',
    description: 'The daily, weekly, and monthly musings of Edmundo Santos, Multidisciplinary Designer & UI Developer.',
    siteUrl: 'https://edmundojr.com/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: '#16161d',
              linkImagesToOriginal: false,
              maxWidth: 800,
              quality: 100,
              showCaptions: true,
              withWebp: true
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-1068613-7`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      postCssPlugins: [
        require('autoprefixer')()
      ],
      precision: 8,
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@jamesdanylik/gatsby-source-goodreads`,
      options: {
        key: `k3utR8gOzC6HeUkbxbXg`,
        id: `35088315`
      }
    }
  ],
}
