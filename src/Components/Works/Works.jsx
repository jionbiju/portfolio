import React from 'react'
import { projects } from '../../assets/data/constants'
import './Works.css'
const Works = () => {
  return (
    <div className='works'>
      <h2>Projects</h2>
      <p>These are projects where I applied what I’ve learned in real-world scenarios</p>
      <div className="works-container">
        {projects.map((works, index) => {
            return (
                <div className="works-card" key={index}>
                    <h3>{works.w_name}</h3>
                    <div className="works-img">
                        <img src={works.w_img} alt="" />
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Works
