import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"
import Head from "../components/head"
import Img from "gatsby-image"
import Layout from "../components/layout"
import masonryStyles from "../utils/masonry.module.scss"
import { isPic, isVid } from "../utils/index.js"
import Masonry from "../utils/masonry"

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
      <PageTransition>
        <Head title="Work" />
        <Masonry>
          {data.allContentfulWork.edges.map(edge => {
            return (
              <Link
                className={`${masonryStyles.relatively}`}
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
                <div className={`${masonryStyles.noShow}`}>
                  {edge.node.title}
                </div>
                <div className={`${masonryStyles.itemTitle}`}>
                  {edge.node.title}
                </div>
              </Link>
            )
          })}
        </Masonry>
      </PageTransition>
    </Layout>
  )
}

export default IndexPage
