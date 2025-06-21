import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Works from './Components/Works/Works'

const App = () => {
  return (
    <div className='background'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Works/>
    </div>
  )
}

export default App
