import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

//just grabbing the slugs
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
    }
  }
`

//idk what to do here really
const Tagged = props => {
  return (
    <Layout>
      <h2>
        Tagged <em>{props.pathContext.slug}</em>
      </h2>

      {console.log(props.data)}
    </Layout>
  )
}

export default Tagged
