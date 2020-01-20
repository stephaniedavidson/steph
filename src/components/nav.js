import React from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const Nav = () => {
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
      <h1>{myConfig.site.siteMetadata.title}</h1>
      <div className={navStyles.descriptor}>Generalist</div>
      <ul>
        <li>
          <Link activeClassName={navStyles.active} to="/">
            Work
          </Link>
        </li>
        <li>
          <Link activeClassName={navStyles.active} to="/contact">
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
