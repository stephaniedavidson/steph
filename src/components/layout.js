import React from "react"
import Footer from './footer.js'
import Nav from './nav.js'
import '../styles/index.scss'
import { graphql, useStaticQuery } from 'gatsby'

const Layout = (props) => {
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
        <div>
            <Nav />
            i am in a layout of {myConfig.site.siteMetadata.title}
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout