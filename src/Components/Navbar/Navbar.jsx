import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='title'>JION<span >.</span></h1>
      <div className="nav-menu-box">
        <ul className="nav-menu">
        <li>Home</li>
        <li>About-me</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>
      </div>
      <div className="contact-btn">Contact Me</div>
    </div>
  )
}

export default Navbar
