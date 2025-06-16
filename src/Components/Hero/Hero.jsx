import React from 'react'
import './Hero.css'
import profile from '../../assets/profile_img_1.jpg'
const Hero = () => {
  return (
    <div className='hero'>
      <img  src={profile} alt="" />
      <h3>Hi! I'm Jion Biju</h3>
      <h1>An aspiring software developer from Kerala, India.</h1>
       <p>Currently pursuing my B.Tech in Computer Science, and 
       working on real-world projects to shape my career in tech.</p>
       <button className="hero-cv">Download CV</button>
    </div>
  )
}

export default Hero
