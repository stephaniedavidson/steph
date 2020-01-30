import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"
import Filter from "../components/filter"
import indexStyles from "../components/index.module.scss"

const IndexPage = () => {
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
      <Filter />
      <div className={indexStyles.indexWrapper}>
        {data.allContentfulWork.edges.map(edge => {
          return (
            <div key={edge.node.slug} data-tags={edge.node.tags.split(",")}>
              <Link to={`/work/${edge.node.slug}`}>
                <div className={indexStyles.item}>
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
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
