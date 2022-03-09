import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className="nav-wrapper">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/user/opicka" className="nav-link">nejakej user</Link>
        <Link to="/sem-nechod" className="nav-link">sem nechod</Link>
      </div>
    </>
  )
}

export default NavBar