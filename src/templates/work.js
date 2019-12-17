import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer" //takes the contentful rich text json and spits out component

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      blurb {
        json
      }
    }
  }
`

const Work = props => {
  return (
    <Layout>
      <h1>{props.data.contentfulWork.title}</h1>
      <p>{props.data.contentfulWork.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulWork.blurb.json)}
    </Layout>
  )
}

export default Work

//mon night 3:28
