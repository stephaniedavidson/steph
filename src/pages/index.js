import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"
import Head from "../components/head"
import Img from "gatsby-image"
import Filter from "../components/filter"
import Layout from "../components/layout"
import indexStyles from "../components/index.module.scss"
import { isPic, isVid } from "../utils/index.js"

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
        <Filter />

        <div className={indexStyles.indexWrapper}>
          {data.allContentfulWork.edges.map(edge => {
            return (
              <div
                className={`${indexStyles.item} ${
                  edge.node.featured
                    ? indexStyles.featured
                    : indexStyles.notFeatured
                }`}
                key={edge.node.slug.replace(/ /g, "")}
              >
                <Link to={`/work/${edge.node.slug}`}>
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

                  <div className={indexStyles.itemInfo}>
                    <h3>{edge.node.title}</h3>
                    <p>
                      Tags: <em>{edge.node.tags}</em>
                    </p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </PageTransition>
    </Layout>
  )
}

export default IndexPage
