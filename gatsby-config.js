module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'orders',
        path: 'data'
      }
    },
    `gatsby-transformer-csv`
  ]
}