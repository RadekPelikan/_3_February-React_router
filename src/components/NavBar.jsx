import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({index}) => {
  return (
    <>
      <div className="nav-wrapper">
        <Link to={index} className="nav-link">Home</Link>
        <Link to={`${index}/user/opicka`} className="nav-link">nejakej user</Link>
        <Link to={`${index}/bruh`} className="nav-link">sem nechod</Link>
      </div>
    </>
  )
}

export default NavBar