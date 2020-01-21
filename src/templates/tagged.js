import React from "react"

import { Link, graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      tags
      heroImage {
        title
        file {
          url
        }
      }
      blurb {
        json
      }
    }
  }
`

const Tagged = props => {
  return (
    <Layout>
      <h1>
        tagged <em>{props.data.contentfulWork.tags}</em>
      </h1>
      {/* <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul> */}
    </Layout>
  )
}
//https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/
export default tagged
