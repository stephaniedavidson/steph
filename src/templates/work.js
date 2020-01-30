import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

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
  function printPicOrVid(myUrl) {
    let fileExt =
      myUrl.substring(myUrl.lastIndexOf(".") + 1, myUrl.length) || myUrl
    if (fileExt === "jpg" || fileExt === "png" || fileExt === "gif") {
      return <img src={"https:" + myUrl} alt="artwork" />
    } else if (fileExt === "mp4") {
      return (
        <video
          width="100%"
          src={"https:" + myUrl}
          loop
          autoPlay
          muted
          playsInline
        ></video>
      )
    } else {
      return "invalid hero image"
    }
  }

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
    <Layout>
      <Head title={props.data.contentfulWork.title} />
      <h1>{props.data.contentfulWork.title}</h1>
      <p>{props.data.contentfulWork.publishedDate}</p>

      {props.data.contentfulWork.heroImage &&
        printPicOrVid(props.data.contentfulWork.heroImage.file.url)}
      {documentToReactComponents(props.data.contentfulWork.blurb.json, options)}
    </Layout>
  )
}

//4:25

export default Work
