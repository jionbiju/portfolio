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
            I’m a 3rd-year Computer Science Engineering student at Vimal Jyothi
            Engineering College, Kerala. My passion for technology has led me to
            work on several college-level projects, helping me gain hands-on
            experience in software development and improve my problem-solving
            skills.
          </p>

          <p>
            I love creating clean, user-friendly interfaces and constantly
            strive to grow my skill set.I aim to become a well-rounded
            full-stack developer and am excited about contributing to real-world
            tech projects
          </p>

          <div className="about-info-grid">
            <div>
              <strong>DOB:</strong> 17 June 2004
            </div>
            <div>
              <strong>City:</strong> Kannur, Kerala
            </div>
            <div>
              <strong>Freelance:</strong> Available
            </div>
            <div>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/jionbiju"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/jionbiju
              </a>
            </div>
            <div>
              <strong>Phone: </strong> 9778368880
            </div>
            <div>
              <strong>Email:</strong> jionbiju@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
