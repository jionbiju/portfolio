import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='title'>JION<span >.</span></h1>
      <div className="nav-menu-box">
        <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' href='#home'>Home</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'>About-me</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#skills'>Skills</AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#works'>Projects</AnchorLink></li>
      </ul>
      </div>
      <div className="contact-btn"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
