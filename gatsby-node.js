const path = require("path")
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const workTemplate = path.resolve("./src/templates/work.js")
  const res = await graphql(`
    query {
      allContentfulWork {
        edges {
          node {
            slug
            tags
          }
        }
      }
    }
  `)

  //CREATE THE WORK PAGES (works fine!)
  res.data.allContentfulWork.edges.forEach(edge => {
    createPage({
      component: workTemplate,
      path: `/work/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  //CREATE TAG PAGES (this sorta works)
  let allTags = []
  res.data.allContentfulWork.edges.forEach(edge => {
    eachTag = edge.node.tags.split(",").map(x => {
      x.trim()
      allTags.push(x) //collect all the tags
    })
  })

  const uniqueTags = [...new Set(allTags)] //reduce all tags to unique tags
  const tagTemplate = path.resolve("./src/templates/tagged.js")

  uniqueTags.forEach(x => {
    //make a page for each tag
    createPage({
      component: tagTemplate,
      path: `/${x}`, //making the page template?
      context: {
        slug: edge.node.slug, //passing in all the slugs?
      },
    })
  })
}
