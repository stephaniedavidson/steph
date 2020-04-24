import React from "react"
import Link from "gatsby-link"
import PageTransition from "gatsby-plugin-page-transitions"
import Head from "../components/head"

import Layout from "../components/layout"
import Filter from "../components/filter"
import indexStyles from "../components/index.module.scss"

import Masonry from "../utils/masonry"

const Tags = ({ pageContext }) => {
  const { posts, tagName } = pageContext

  if (posts) {
    return (
      <Layout>
        <PageTransition>
          <Head title={`Tagged ${tagName}`} />
          <Filter />
          <h3>
            Tagged <em>{tagName}</em>
          </h3>
          <Masonry>
            {posts.map(post => {
              return (
                <div
                  className={`${indexStyles.item}`}
                  key={post.slug.replace(/ /g, "")}
                >
                  <Link to={`work/${post.slug.replace(/ /g, "")}`}>
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
                    <div className={indexStyles.itemInfo}>
                      <span className={indexStyles.itemTitle}>
                        {post.title}
                      </span>
                      <br />
                      <span>
                        Tags: <em>{post.tags}</em>
                      </span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </Masonry>
        </PageTransition>
      </Layout>
    )
  }
}

export default Tags
