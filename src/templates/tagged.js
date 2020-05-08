import React from "react"
import Link from "gatsby-link"
import Head from "../components/head"
import Layout from "../components/layout"
import masonryStyle from "../utils/masonry.module.scss"
// import Img from "gatsby-image"
import { isPic, isVid } from "../utils/index.js"

const Tags = ({ pageContext }) => {
  const { posts, tagName } = pageContext

  if (posts) {
    return (
      <Layout>
        <Head title={`Tagged ${tagName}`} />
        <h3>
          Tagged <em>{tagName}</em>
        </h3>
        <div className={masonryStyle.masonryWrapper}>
          {posts.map(post => {
            return (
              <Link
                className={`${masonryStyle.item} ${
                  post.featured ? `${masonryStyle.featured}` : ""
                }`}
                to={`work/${post.slug.replace(/ /g, "")}`}
                key={post.slug.replace(/ /g, "")}
              >
                {isVid(post.heroImage.file.contentType) && (
                  <video
                    src={post.heroImage.file.url}
                    width="100%"
                    loop
                    autoPlay
                    muted
                    playsInline
                    preload="none"
                  ></video>
                )}
                {isPic(post.heroImage.file.contentType) && (
                  // <Img
                  //   fluid={post.heroImage.fluid}
                  //   alt={post.heroImage.file.title}
                  // />
                  <img
                    src={post.heroImage.file.url}
                    alt={post.heroImage.file.title}
                  />
                )}
                <div className={masonryStyle.titleOverlay}>{post.title}</div>
              </Link>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Tags
