import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"
import Head from "../components/head"

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
            publishedDate(formatString: "MMMM Do, YYYY")
            heroImage {
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
                    <img
                      src={edge.node.heroImage.file.url}
                      alt={edge.node.heroImage.title}
                    />
                  )}

                  <div className={indexStyles.itemInfo}>
                    <h2>{edge.node.title}</h2>
                    <span>{edge.node.publishedDate}</span>
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
