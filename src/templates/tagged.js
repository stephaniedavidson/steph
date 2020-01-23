import React from "react"
import { graphql } from "gatsby"

//takes the contentful rich text json and spits out component
import Head from "../components/head"
import Layout from "../components/layout"

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
const Tagged = props => {
  return (
    <Layout>
      <h1>{props}</h1>
    </Layout>
  )
}

export default Tagged
