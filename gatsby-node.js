const path = require("path")

//https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions //2:40
  //get path to template
  const workTemplate = path.resolve("./src/templates/work.js")
  //get markdown data
  const res = await graphql(`
    query {
      allContentfulWork {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  //create new pages (2:45)
  res.data.allContentfulWork.edges.forEach(edge => {
    createPage({
      component: workTemplate,
      path: `/work/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
