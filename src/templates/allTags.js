import React from "react"
import Link from "gatsby-link"
import Head from "../components/head"
import Layout from "../components/layout"

const AllTags = ({ pageContext }) => {
  const { tags } = pageContext

  if (tags) {
    return (
      <Layout>
        <Head title="All tags" />
        <ul>
          <li>
            {tags.map(tag => {
              return (
                <li>
                  <Link to={`./tagged/${tag.replace(/ /g, "")}`}>{tag}</Link>
                </li>
              )
            })}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default AllTags
