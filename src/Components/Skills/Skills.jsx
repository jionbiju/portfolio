import React from 'react'
import './Skills.css'
import { skills } from '../../assets/data/constants' 

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <h2>Skills</h2>
      <p>Here are some of my skills that I've been working on over the past 2 years.</p>
      <div className="skills-container">
        {skills.map((skill, index) => {
            return (
                <div className="skill-card" key={index}>
                    <h3>{skill.title}</h3>
                    <div className="skill-list">
                        {skill.skills.map((item,idx) => {
                            return (
                                <div className="skill-item" key={idx}>
                                    <img src={item.image} alt="" />
                                    {item.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Skills
