import React from "react"
import Link from "gatsby-link"

import Head from "../components/head"
import Layout from "../components/layout"
import Filter from "../components/filter"
import indexStyles from "../components/index.module.scss"

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext

  if (posts) {
    return (
      <Layout>
        <Head title={`Tagged ${tagName}`} />
        <Filter />
        <h2>
          Tagged <em>{tagName}</em>
        </h2>
        <div className={indexStyles.indexWrapper}>
          {posts.map(post => {
            return (
              <div
                className={indexStyles.item}
                key={post.slug.replace(/ /g, "")}
              >
                <Link to={`work/${post.slug.replace(/ /g, "")}`}>
                  {post.title}
                  {console.log(post.heroImage.file.contentType)}
                  <img src={post.heroImage.file.url} alt="artwork" />
                </Link>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Tags
