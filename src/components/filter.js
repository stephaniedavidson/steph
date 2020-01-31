import React from "react"
import { Link } from "gatsby"
import filterStyles from "./filter.module.scss"

const Filter = () => {
  return (
    <div className={filterStyles.filter}>
      Filter:
      <ul>
        <li>
          <Link activeClassName={filterStyles.active} to="/design">
            Design + development
          </Link>
        </li>
        <li>
          <Link activeClassName={filterStyles.active} to="/motion">
            Motion
          </Link>
        </li>
        <li>
          <Link activeClassName={filterStyles.active} to="/illustration">
            Illustration
          </Link>
        </li>
        <li>
          <a
            href="https://bloombergcyber.tumblr.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Art direction
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Filter
