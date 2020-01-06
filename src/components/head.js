import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  //manages head of document
  //if programmed with title use that title otehrwise use metadata title
  return <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
}

export default Head
