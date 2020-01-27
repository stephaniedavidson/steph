import React from "react"
import Link from "gatsby-link"

const Tags = ({ pathContext }) => {
  const { posts, tagName } = pathContext

  if (posts) {
    return (
      <div>
        <h1>
          Tagged <em>{tagName}</em>
        </h1>
        <ul>
          <li>
            {posts.map(post => {
              return (
                <li>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </li>
              )
            })}
          </li>
        </ul>
      </div>
    )
  }
}

export default Tags
