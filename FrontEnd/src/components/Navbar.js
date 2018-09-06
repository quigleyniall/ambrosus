import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="Navbar">
     <Link to='/'><img className="navbar-image" src="https://cdn.dribbble.com/users/613614/screenshots/4924224/logo.png"/></Link>
    </div>
  )
}

export default Navbar
