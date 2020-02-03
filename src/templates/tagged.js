import React from "react"
import Link from "gatsby-link"
import PageTransition from "gatsby-plugin-page-transitions"
import Head from "../components/head"

import Layout from "../components/layout"
import Filter from "../components/filter"
import indexStyles from "../components/index.module.scss"

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext

  if (posts) {
    return (
      <Layout>
        <PageTransition>
          <Head title={`Tagged ${tagName}`} />
          <Filter />
          <h2>
            Tagged <em>{tagName}</em>
          </h2>
          <div className={indexStyles.indexWrapper}>
            {posts.map(post => {
              return (
                <div
                  className={`${indexStyles.item} ${
                    post.featured
                      ? indexStyles.featured
                      : indexStyles.notFeatured
                  }`}
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
                      <h2>{post.title}</h2>
                      <span>{post.publishedDate}</span>

                      <p>
                        Tags: <em>{post.tags}</em>
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
}

export default Tags
