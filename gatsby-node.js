const path = require("path")

removeSpaces = word => {
  return word.replace(/ /g, "")
}

const createTagPages = (createPage, posts) => {
  const tagTemplate = path.resolve("./src/templates/tagged.js")
  const allTagTemplate = path.resolve("./src/templates/allTags.js")
  const postsByTags = {}
  posts.forEach(({ node }) => {
    const splitTags = node.tags.split(",").map(t => t.trim())
    //in each post split tags is an array of strings
    //like ['illustration', 'motion']
    if (node.tags) {
      splitTags.forEach(tag => {
        if (!postsByTags[tag]) {
          postsByTags[tag] = []
        }
        //postsByTags[tag] is all the post objects with that tag
        postsByTags[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTags)
  createPage({
    path: `/tags`,
    component: allTagTemplate,
    context: {
      tags: tags.sort(),
    },
  })
  //create EACH TAG PAGE
  tags.forEach(tagName => {
    const posts = postsByTags[tagName]
    createPage({
      path: `/${tagName.replace(/ /g, "")}`,
      component: tagTemplate,
      context: {
        posts,
        tagName,
      },
    })
  })
}

//******THIS QUERY IS WHERE I TRY TO INSERT:
// heroImage {
//   fluid(maxWidth: 1800) {
//     ...GatsbyContentfulFluid
//   }
//I want to send the fluid data to the template pages so I can have the same masonry as my pages/index.js page
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(`
    query {
      allContentfulWork(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
            tags
            title
            heroImage {
              title
              file {
                url
                contentType
              }
            }
          }
        }
      }
    }
  `)
  const posts = res.data.allContentfulWork.edges

  //CREATE THE WORK PAGES
  const workTemplate = path.resolve("./src/templates/work.js")
  res.data.allContentfulWork.edges.forEach(edge => {
    createPage({
      component: workTemplate,
      path: `/work/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  //CREATE TAG PAGES
  createTagPages(createPage, posts)
}
