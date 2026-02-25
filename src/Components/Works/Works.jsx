// import React from 'react'
// import { projects } from '../../assets/data/constants'
// import './Works.css'
// const Works = () => {
//   return (
//     <div className='works' id='works'>
//       <h2>Projects</h2>
//       <p>These are projects where I applied what I’ve learned in real-world scenarios</p>
//       <div className="works-container">
//         {projects.map((works, index) => {
//             return (
//                 <div className="works-card" key={index}>
//                     <h3>{works.w_name}</h3>
//                     <div className="works-img">
//                         <img src={works.w_img} alt="" />
//                     </div>
//                 </div>
//             )
//         })}
//       </div>
//     </div>
//   )
// }

// export default Works

import React, { useState } from 'react'
import { projects } from '../../assets/data/constants'
import './Works.css'

const Works = () => {
  const [flippedCard, setFlippedCard] = useState(null)

  const handleCardFlip = (index) => {
    setFlippedCard(flippedCard === index ? null : index)
  }

  return (
    <div className='works' id='works'>
      <h2>Projects</h2>
      <p>These are projects where I applied what I've learned in real-world scenarios</p>
      <div className="works-container">
        {projects.map((work, index) => {
          return (
            <div className="works-card-wrapper" key={index}>
              <div 
                className={`works-card ${flippedCard === index ? 'flipped' : ''}`}
                onClick={() => handleCardFlip(index)}
              >
                {/* Front of the card */}
                <div className="works-card-front">
                  <h3>{work.w_name}</h3>
                  <div className="works-img">
                    <img src={work.w_img} alt={work.w_name} />
                  </div>
                  <div className="flip-indicator">
                    <span>Click to learn more</span>
                    <div className="flip-icon">↻</div>
                  </div>
                </div>

                {/* Back of the card */}
                <div className="works-card-back">
                  <h3>{work.w_name}</h3>
                  <div className="project-description">
                    <p>{work.w_details}</p>
                  </div>
                  <div className="project-tech">
                    <h4>Technologies:</h4>
                    <div className="tech-tags">
                      {work.w_tech.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{
                          tech}</span>
                      )) }
                    </div>
                  </div>
                  <div className="project-links">
                    <a 
                      href={work.w_github || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="github-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    {work.w_demo && (
                      <a 
                        href={work.w_demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="demo-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20">
                          <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Works