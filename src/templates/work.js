import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import PageTransition from "gatsby-plugin-page-transitions"
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
          contentType
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
  const fileType = props.data.contentfulWork.heroImage.file.contentType
  let isVideo = false
  let isPic = false
  if (
    fileType === "image/jpeg" ||
    fileType === "image/png" ||
    fileType === "image/gif"
  ) {
    isPic = true
  } else if (fileType === "video/mp4") {
    isVideo = true
  }
  return (
    <Layout>
      <PageTransition>
        <Head title={props.data.contentfulWork.title} />
        <h1>{props.data.contentfulWork.title}</h1>
        <p>{props.data.contentfulWork.publishedDate}</p>
        {console.log("@@@@@@@@@@@@@@@@@@@@@@")}
        {console.log(props.data.contentfulWork)}
        {isVideo && (
          <video
            src={props.data.contentfulWork.heroImage.file.url}
            width="100%"
            loop
            autoPlay
            muted
            playsInline
            preload="none"
          ></video>
        )}{" "}
        <br />
        {isPic && (
          <img
            src={props.data.contentfulWork.heroImage.file.url}
            alt={props.data.contentfulWork.heroImage.title}
          />
        )}
        <br />
        <br />
        {props.data.contentfulWork.heroImage.file.url}
        {documentToReactComponents(
          props.data.contentfulWork.blurb.json,
          options
        )}
      </PageTransition>
    </Layout>
  )
}

export default Work
