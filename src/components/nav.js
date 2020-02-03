import React from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const Nav = () => {
  function pathIncludes() {
    if (
      window.location.href.includes("motion") ||
      window.location.href.includes("design") ||
      window.location.href.includes("illustration")
    ) {
      return navStyles.active
    }
  }

  const myConfig = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <nav className={navStyles.nav}>
      <h1>
        <Link to="../">{myConfig.site.siteMetadata.title}</Link>
      </h1>
      <div className={navStyles.descriptor}>
        <p>Creative generalist</p>
        <ul>
          <li>
            <Link
              activeClassName={navStyles.active}
              className={pathIncludes()}
              to="/"
            >
              Work
            </Link>
          </li>
          <li>
            <Link activeClassName={navStyles.active} to="/contact">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
