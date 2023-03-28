import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
        <nav>
            <ul>
                <Link to="/" ><li>HomePage</li></Link>
                <Link to="/about" ><li>About Us</li></Link>
                <Link to="/characters-list" ><li>Characters List</li></Link>
            </ul>
        </nav>
  )
}

export default NavBar