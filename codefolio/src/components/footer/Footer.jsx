import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footerInfo">
        <div> Mudit Tarway </div>
        <div> © 2025 Mudit Tarway. All rights reserved. </div>
        <div className="socialIcons">
          <a href="https://www.linkedin.com/in/mudittarway/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            </a>
          <a href="https://github.com/Mudit-Tarway" target="_blank" rel="noopener noreferrer">
            <FaGithub /> 
          </a>
          <a href="https://x.com/MuditTarwa257" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
    </div>
  )
}

export default Footer