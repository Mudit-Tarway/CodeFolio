import React from "react";
import "./About.css";

function About() {
  return (
    <div className="ParentDiv">
      <div className="Child1">
        <img src="./public/MuditFinal.jpg" alt="Hero" className="imageTag" />
      </div>
      <div className="Child2">
        <p className="Intro">Hi, I'm</p>
        <p className="Name">Mudit Tarway</p>
        <p className="Title"> Full-Stack and AI Developer</p>
        <p className="Description">
          A results-driven engineer specializing in artificial intelligence and
          full-stack web development. Passionate about building intelligent
          systems and creating seamless, user-centric applications that solve
          real-world problems. Always eager to learn and apply new technologies.
        </p>
      </div>
      <div style={{ display: "flex", gap: "18px", marginTop: "2px" }}>
        <button className="aboutBtn secondary"><a href="./public/Mudit_Resume.pdf" download>Download CV</a></button>
      </div>
    </div>
  );
}

export default About;
