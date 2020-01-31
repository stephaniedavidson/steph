import React from "react"
import Link from "gatsby-link"
import PageTransition from "gatsby-plugin-page-transitions"

import Head from "../components/head"
import Layout from "../components/layout"

const AllTags = ({ pageContext }) => {
  const { tags } = pageContext

  if (tags) {
    return (
      <PageTransition>
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
      </PageTransition>
    )
  }
}

export default AllTags
