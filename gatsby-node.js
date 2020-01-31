const path = require("path")

removeSpaces = word => {
  return word.replace(/ /g, "")
}

const createTagPages = (createPage, posts) => {
  const tagTemplate = path.resolve("./src/templates/tagged.js")
  const allTagTemplate = path.resolve("./src/templates/allTags.js")
  const postsByTags = {}
  posts.forEach(({ node }) => {
    const splitTags = node.tags.split(",")
    if (node.tags) {
      splitTags.forEach(tag => {
        if (!postsByTags[tag]) {
          postsByTags[tag] = []
        }
        postsByTags[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTags)
  //create ALL TAGS
  createPage({
    path: `/tags`,
    component: allTagTemplate,
    context: {
      tags: tags.sort(),
    },
  })
  //create EACH TAG
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

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(`
    query {
      allContentfulWork {
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
