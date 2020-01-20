import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"
import indexStyles from "../components/index.module.scss"

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
      <div className={indexStyles.filter}>
        Filter:{" "}
        <ul>
          <li>Design</li>
          <li>Motion</li>
          <li>Illustration</li>
        </ul>
      </div>
      <ul className={indexStyles.indexPage}>
        {data.allContentfulWork.edges.map(edge => {
          return (
            <li key={edge.node.slug} data-tags={edge.node.tags.split(",")}>
              <Link to={`/work/${edge.node.slug}`}>
                <div className="pic">
                  {edge.node.heroImage && (
                    <img
                      src={edge.node.heroImage.file.url}
                      alt={edge.node.title}
                    />
                  )}
                </div>
                <h2>{edge.node.title}</h2>
                {edge.node.publishedDate}
                <br />
                Tags: {edge.node.tags}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default IndexPage
