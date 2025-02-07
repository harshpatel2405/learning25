import React from "react";
import "./AboutMe.css";

import profileImage from "../assets/profile-image.avif";
const AboutMe = () => {
  return (
    <div class="about-me">
      <div className="profile-section">
        <h1>About Me</h1>
        <div class="img-box">
          <img src={profileImage} alt="demo" ></img>
        </div>
      </div>

      {/* <p class="about-me-p">
        I am a mern stack based web developer working on industry level project
        of mern stack and looking for real-time projects to work upon and making
        nice project.......
      </p> */}

      {/* <div className="profile">
        <p class="text">My Skills</p>
        <ul class="skills-links">
          <li class>
            <a href="#">HTML</a>
          </li>
          <li class>
            <a href="#">CSS</a>
          </li>
          <li class>
            <a href="#">JavaScript</a>
          </li>
          <li class>
            <a href="#">Github</a>
          </li>
          <li class>
            <a href="#">MERN</a>
          </li>
        </ul>

        <p class ="text">My Projects</p>
        <ul class="project-links">
          <li class>
            <a href="#">FireSight</a>
          </li>
          <li class>
            <a href="#">Portfolio</a>
          </li>
          <li class>
            <a href="#">Wed_Joy</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default AboutMe;
