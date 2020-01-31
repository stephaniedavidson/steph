import React from "react"
import Link from "gatsby-link"

import Head from "../components/head"
import Layout from "../components/layout"
import Filter from "../components/filter"

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext

  if (posts) {
    return (
      <Layout>
        <Filter />
        <Head title={`Tagged ${tagName}`} />
        <h2>
          Tagged <em>{tagName}</em>
        </h2>
        <ul>
          {posts.map(post => {
            return (
              <li>
                <Link to={post.slug.replace(/ /g, "")}>{post.title}</Link>
              </li>
            )
          })}
        </ul>
      </Layout>
    )
  }
}

export default Tags
