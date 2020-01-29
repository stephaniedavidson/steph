const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions //2:40
  const workTemplate = path.resolve("./src/templates/work.js")
  const tagTemplate = path.resolve("./src/templates/tagged.js")
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

  //CREATE THE WORK PAGES
  res.data.allContentfulWork.edges.forEach(edge => {
    createPage({
      component: workTemplate,
      path: `/work/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
  // unique tag array
  let allTags = []
  res.data.allContentfulWork.edges.forEach(edge => {
    eachTag = edge.node.tags.split(",").map(x => {
      x.trim()
      //push to all tags
      allTags.push(x)
    })
    console.log("ALL TAGS ", allTags)
  })
  //reduce tags
  const uniqueTags = [...new Set(allTags)]
  //make a page for each tag
  uniqueTags.forEach(x => {
    createPage({
      component: tagTemplate,
      path: `/${x}`,
      context: {
        slug: res.data.allContentfulWork.edges,
      },
    })
  })
  //.includes("design");
}
