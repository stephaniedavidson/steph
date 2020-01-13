import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"
import workStyles from "../components/work.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulWork(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
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
      <Head title="Scotts Homepage" />
      <ul className={workStyles.indexPage}>
        {data.allContentfulWork.edges.map(edge => {
          return (
            <li key={edge.node.slug}>
              <Link to={`/work/${edge.node.slug}`}>
                <h3>{edge.node.title}</h3>
                {edge.node.publishedDate}
                {console.log(
                  edge.node.heroImage ? edge.node.heroImage.file.url : "has not"
                )}
                {edge.node.heroImage && (
                  <img src={edge.node.heroImage.file.url} />
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default IndexPage
