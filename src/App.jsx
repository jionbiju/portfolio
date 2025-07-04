import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Works from './Components/Works/Works'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='background'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
