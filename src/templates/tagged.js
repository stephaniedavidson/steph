import React from "react"
import Link from "gatsby-link"

import Head from "../components/head"
import Layout from "../components/layout"

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext

  if (posts) {
    return (
      <Layout>
        <Head title={`Tagged ${tagName}`} />
        <h1>
          Tagged <em>{tagName}</em>
        </h1>
        <ul>
          <li>
            {posts.map(post => {
              return (
                <li>
                  <Link to={post.slug.replace(/ /g, "")}>{post.title}</Link>
                </li>
              )
            })}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default Tags
