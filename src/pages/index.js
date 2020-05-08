import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { isPic, isVid } from "../utils/index.js"
import masonryStyle from "../utils/masonry.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulWork(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            tags
            featured
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
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Work" />
      <div className={masonryStyle.masonryWrapper}>
        {data.allContentfulWork.edges.map(edge => {
          return (
            <Link
              className={`${masonryStyle.item} ${
                edge.node.featured ? `${masonryStyle.featured}` : ""
              }`}
              to={`/work/${edge.node.slug}`}
              key={edge.node.slug.replace(/ /g, "")}
            >
              {isVid(edge.node.heroImage.file.contentType) && (
                <video
                  src={edge.node.heroImage.file.url}
                  width="100%"
                  loop
                  autoPlay
                  muted
                  playsInline
                  preload="none"
                ></video>
              )}
              {isPic(edge.node.heroImage.file.contentType) && (
                <Img
                  fluid={edge.node.heroImage.fluid}
                  alt={edge.node.heroImage.title}
                />
              )}
              <div className={masonryStyle.titleOverlay}>{edge.node.title}</div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
