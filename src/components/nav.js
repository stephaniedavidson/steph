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
      <h1>
        <Link to="../">{myConfig.site.siteMetadata.title}</Link>
      </h1>
      <div className={navStyles.descriptor}>
        <p>Creative generalist</p>
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
      </div>
    </nav>
  )
}

export default Nav
