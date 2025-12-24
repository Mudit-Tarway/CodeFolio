import { FaLaptopCode, FaPython, FaCertificate } from "react-icons/fa";
import "./Experience.css"; // import custom CSS

function ExperienceTimeline() {
  return (
    <div className="timeline-container">
        <div className="Header"> Work Experience </div>
        <div className="timeline-line"></div>
      {/* DSA Completed */}
      <div className="timeline-item left">
        <div className="timeline-icon dsa-icon">
          <FaLaptopCode size={30} />
        </div>
        <div className="timeline-content">
          <h3>Apna College - DSA with Java <span className="badge completed">Completed</span></h3>
          <ul>
            <li>Covered arrays, linked lists, stacks, queues, trees, graphs,  dynamic programming and algorithms.</li>
            <li>Solved 650+ coding problems in Java.</li>
            <li><FaCertificate className="cert-icon" /> <a target="_blank" href="https://drive.google.com/file/d/15lrnXQHC04yKpkQFrpcmDoun8qkSAKd6/view?usp=sharing">View Certificate</a></li>
          </ul>
        </div>
      </div>

      {/* IBM Internship */}
      <div className="timeline-item right">
        <div className="timeline-icon python-icon">
          <FaPython size={30} />
        </div>
        <div className="timeline-content">
          <h3>IBM Virtual Internship -  Python & ML <span className="badge completed">Completed</span></h3>
          <ul>
            <li>Learning Python libraries: NumPy, Pandas, Matplotlib, Scikit-learn.</li>
            <li>Working on machine learning and data analysis projects.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceTimeline;