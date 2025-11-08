import './Skills.css';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaPython, FaGithub, FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoIosGitBranch } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiTypescript, SiPostman } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandMysql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { SiNumpy } from "react-icons/si";

const Skills = () => {
  return (
    <div className='Skills-Section'>
      <div className="Skills-Container">
        <p className='SkillsHeader'>My Skills & Expertise</p>
        <p className='SkillsSubHeader'>A snapshot of the technologies and tools I work with.</p>
        <div className='SkillsGrid'>
          <div className="SkillCard"><FaHtml5 className='SkillIcon'/> HTML5</div>
          <div className="SkillCard"><FaCss3Alt className='SkillIcon'/> CSS3</div>
          <div className="SkillCard"><IoLogoJavascript className='SkillIcon'/> JavaScript</div>
          <div className="SkillCard"><FaReact className='SkillIcon'/> React.js</div>
          <div className="SkillCard"><FaBootstrap className='SkillIcon'/> Bootstrap</div>
          <div className="SkillCard"><RiTailwindCssFill className='SkillIcon'/> Tailwind CSS</div>
          <div className="SkillCard"><FaNodeJs className='SkillIcon'/> Node.js</div>
          <div className="SkillCard"><SiExpress className='SkillIcon'/> Express.js</div>
          <div className="SkillCard"><DiMongodb className='SkillIcon'/> MongoDB</div>
          <div className="SkillCard"><SiTypescript className='SkillIcon'/> TypeScript</div>
          <div className="SkillCard"><TbBrandMysql className='SkillIcon'/> MySQL</div>
          <div className="SkillCard"><FaPython className='SkillIcon'/> Python</div>
          <div className="SkillCard"><IoIosGitBranch className='SkillIcon'/> Git</div>
          <div className="SkillCard"><FaGithub className='SkillIcon'/> GitHub</div>
          <div className="SkillCard"><VscVscode className='SkillIcon'/> VS Code</div>
          <div className="SkillCard"><SiPostman className='SkillIcon'/> Postman</div>
          <div className="SkillCard"><FaJava className='SkillIcon'/> Java</div>
          <div className="SkillCard"><SiNumpy className='SkillIcon'/> NumPy</div>
          
        </div>
      </div>
    </div>
  );
}

export default Skills;
