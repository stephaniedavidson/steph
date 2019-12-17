import React from 'react'
import { Link } from 'gatsby'
import navStyles from './nav.module.scss'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link activeClassName={navStyles.active} to='/'>Home</Link></li>
                <li><Link activeClassName={navStyles.active} to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav