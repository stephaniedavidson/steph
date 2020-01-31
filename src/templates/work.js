import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import PageTransition from "gatsby-plugin-page-transitions"

//takes the contentful rich text json and spits out component
import Head from "../components/head"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
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
const Work = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <PageTransition>
      <Layout>
        <Head title={props.data.contentfulWork.title} />
        <h1>{props.data.contentfulWork.title}</h1>
        <p>{props.data.contentfulWork.publishedDate}</p>

        {props.data.contenfulWork.heroImage.file.contentType ===
          "video/mp4" && (
          <video
            src={props.data.contenfulWork.heroImage.file.url}
            width="100%"
            loop
            autoPlay
            muted
            playsInline
            preload="none"
          ></video>
        )}
        {props.data.contenfulWork.heroImage.file.contentType ===
          "image/png" && (
          <img
            src={props.data.contenfulWork.heroImage.file.url}
            alt="artwork"
          />
        )}

        {documentToReactComponents(
          props.data.contentfulWork.blurb.json,
          options
        )}
      </Layout>
    </PageTransition>
  )
}

//4:25

export default Work
