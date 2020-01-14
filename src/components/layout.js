import React from "react"
import Footer from "./footer.js"
import Nav from "./nav.js"
import "../styles/index.scss"

const Layout = props => {
  return (
    <div className="wrapper">
      <Nav />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
