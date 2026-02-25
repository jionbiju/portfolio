import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <div className='navbar'>
      <h1 className='title'>
        JION<span>.</span>
      </h1>

      <button
        className={`nav-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-right ${isOpen ? 'nav-open' : ''}`}>
        <div className="nav-menu-box">
          <ul className="nav-menu">
            <li>
              <AnchorLink className='anchor-link' href='#home' onClick={handleNavClick}>
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className='anchor-link' offset={50} href='#about' onClick={handleNavClick}>
                About-me
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className='anchor-link' offset={50} href='#skills' onClick={handleNavClick}>
                Skills
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className='anchor-link' offset={50} href='#works' onClick={handleNavClick}>
                Projects
              </AnchorLink>
            </li>
          </ul>
        </div>
        <div className="contact-btn">
          <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={handleNavClick}>
            Contact Me
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
