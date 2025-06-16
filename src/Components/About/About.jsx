import React from "react";
import "./About.css";
import profile from "../../assets/profile_img_1.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="about-title">About Me</h1>

      <div className="about-section">
        <img className="about-img" src={profile} alt="Profile" />

        <div className="about-text">
          <p>
            I’m a 3rd-year Computer Science Engineering student at Vimal Jyothi Engineering College, Kerala. 
            My passion for technology has led me to work on several college-level projects, helping me gain 
            hands-on experience in software development and improve my problem-solving skills.
          </p>

          <p>
            I’ve built responsive web applications and explored various technologies — with a strong focus 
            on frontend development using HTML, CSS, JavaScript, and React. I love creating clean, user-friendly 
            interfaces and constantly strive to grow my skill set.
          </p>

          <p>
            Outside of academics, I enjoy exploring new tools, libraries, and frameworks. I aim to become a 
            well-rounded full-stack developer and am excited about contributing to real-world tech projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
