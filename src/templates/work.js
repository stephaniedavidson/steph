import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import PageTransition from "gatsby-plugin-page-transitions"
import Head from "../components/head"

import Img from "gatsby-image"
import { isPic, isVid } from "../utils/index.js"
import Layout from "../components/layout"
import workStyles from "./work.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "YYYY")
      heroImage {
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid
        }
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
        // const url = node.data.target.fields.fluid
        if (isPic) {
          return <img alt={alt} src={url} />
        } else if (isVid) {
          return (
            <video
              src={url}
              width="100%"
              loop
              autoPlay
              muted
              playsInline
              preload="none"
            ></video>
          )
        }
      },
    },
  }
  const fileType = props.data.contentfulWork.heroImage.file.contentType
  return (
    <Layout>
      <PageTransition>
        <Head title={props.data.contentfulWork.title} />
        <h2 className={workStyles.title}>{props.data.contentfulWork.title}</h2>
        <div className={workStyles.pubDate}>
          {props.data.contentfulWork.publishedDate}
        </div>
        {isVid(fileType) && (
          <video
            src={props.data.contentfulWork.heroImage.file.url}
            width="100%"
            loop
            autoPlay
            muted
            playsInline
            preload="none"
          ></video>
        )}
        {isPic(fileType) && (
          <Img
            fluid={props.data.contentfulWork.heroImage.fluid}
            alt={props.data.contentfulWork.heroImage.title}
          />
        )}
        <section className={workStyles.workBody}>
          {documentToReactComponents(
            props.data.contentfulWork.blurb.json,
            options
          )}
        </section>
      </PageTransition>
    </Layout>
  )
}

export default Work
