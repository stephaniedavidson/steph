import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import PageTransition from "gatsby-plugin-page-transitions"
import Head from "../components/head"

import Img from "gatsby-image"

import { isPic, isVid } from "../utils/index.js"
import Layout from "../components/layout"
import indexStyles from "../components/index.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_noBase64
        }
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
        if (isPic) {
          return <img alt={alt} src={url} key={alt} />
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
        <h2 className={indexStyles.title}>{props.data.contentfulWork.title}</h2>
        <p>{props.data.contentfulWork.publishedDate}</p>
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
        <section className={indexStyles.workBody}>
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
