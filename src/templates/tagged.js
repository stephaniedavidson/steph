import React from "react"
import Link from "gatsby-link"
import PageTransition from "gatsby-plugin-page-transitions"
import Head from "../components/head"

import Layout from "../components/layout"

import masonryStyles from "../utils/masonry.module.scss"
import Masonry from "../utils/masonry"

const Tags = ({ pageContext }) => {
  const { posts, tagName } = pageContext

  if (posts) {
    return (
      <Layout>
        <PageTransition>
          <Head title={`Tagged ${tagName}`} />
          <h3>
            Tagged <em>{tagName}</em>
          </h3>
          <Masonry>
            {posts.map(post => {
              return (
                <Link
                  className={`${masonryStyles.relatively}`}
                  to={`work/${post.slug.replace(/ /g, "")}`}
                  key={post.slug.replace(/ /g, "")}
                >
                  {post.heroImage.file.contentType === "video/mp4" && (
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
                  {post.heroImage.file.contentType === "image/png" && (
                    <img
                      src={post.heroImage.file.url}
                      alt={post.heroImage.file.title}
                    />
                  )}
                  {post.heroImage.file.contentType === "image/jpeg" && (
                    <img
                      src={post.heroImage.file.url}
                      alt={post.heroImage.file.title}
                    />
                  )}
                  {post.heroImage.file.contentType === "image/gif" && (
                    <img
                      src={post.heroImage.file.url}
                      alt={post.heroImage.file.title}
                    />
                  )}
                  <div className={masonryStyles.noShow}>{post.title}</div>
                  <div className={masonryStyles.itemTitle}>{post.title}</div>
                </Link>
              )
            })}
          </Masonry>
        </PageTransition>
      </Layout>
    )
  }
}

export default Tags
