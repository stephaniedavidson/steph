import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"
import Filter from "../components/filter"
import indexStyles from "../components/index.module.scss"
import { printPicOrVid } from "../utils"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulWork(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            tags
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
      <Head title="Work" />
      <Filter />
      <div className={indexStyles.indexWrapper}>
        {data.allContentfulWork.edges.map(edge => {
          return (
            <Link to={`/work/${edge.node.slug}`}>
              <div className={indexStyles.item} key={edge.node.slug}>
                {edge.node.heroImage &&
                  printPicOrVid(edge.node.heroImage.file.url)}
                <div className={indexStyles.itemInfo}>
                  <h2>{edge.node.title}</h2>
                  {edge.node.publishedDate}
                  <br />
                  Tags: {edge.node.tags}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
