import React from "react";
import "./Contact.css";
import { IoMdMailOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-bg"></div>
      <div className="contact-card">
        <div className="contact-card-1">
          <h2 className="contact-header">Let's Connect</h2>
          <p className="contact-info">
            I'm always open to collaboration or exciting new projects. Drop me a
            message!
          </p>
        </div>
        <div className="contact-links">
          <div className="email-icon">
            <IoMdMailOpen className="mail-icon" />
            <a href="mailto:official.mudittarway@gmail.com">
              official.mudittarway@gmail.com
            </a>
          </div>
          <div className="social-icons">
            <p>or connect with me in </p>
            <FaLinkedin />{" "}
            <a
              href="https://www.linkedin.com/in/mudit-tarway-927ba5244/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <FaGithub />{" "}
            <a
              href="https://github.com/mudittarway"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
