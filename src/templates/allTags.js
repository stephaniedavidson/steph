import React from "react"
import Link from "gatsby-link"
import PageTransition from "gatsby-plugin-page-transitions"

import Head from "../components/head"
import Layout from "../components/layout"

const AllTags = ({ pageContext }) => {
  const { tags } = pageContext

  if (tags) {
    return (
      <Layout>
        <PageTransition>
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
        </PageTransition>
      </Layout>
    )
  }
}

export default AllTags
