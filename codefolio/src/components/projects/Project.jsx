import React from 'react';
import './Projects.css';

export const Project = () => {
  const projects = [
    {
      id: 1,
      title: 'Movie Search Web Based on OMDB API',
      description: 'A web application that allows users to search for movies using the OMDB API. Features include movie details, ratings, and user reviews.',
      image: './public/MovieSearch.png', 
      technologies: ['HTML', 'API Integration', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/Mudit-Tarway/Movie-Search-API',
      Link : 'https://youtu.be/Mp403kn_CV0',
      category: 'Frontend'
    },
    {
      id: 2,
      title: 'UpQuiz',
      description: 'A responsive quiz application that allows users to take quizzes on various topics. Features include real-time quiz updates.',
      image: './public/UpQuiz.png',
      technologies: ['HTML', 'CSS', 'Chart.js' , 'JavaScript'],
      githubLink: 'https://github.com/Mudit-Tarway/UpQuiz',
      liveLink: 'https://upquiz.netlify.app/',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Todo Application',
      description: 'A full-stack task management application that allows users to create, read, update, and delete tasks. Features user authentication and data persistence.',
      image: './public/Todo.jpg',
      technologies: ['React', 'BootStrap', 'Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/Mudit-Tarway/Todo-App',
      Link: 'https://youtu.be/5pebvylRM-Q',
      category: 'Full-Stack'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Built with React and featuring smooth animations.',
      image: './public/Portfolio.png',
      technologies: ['React', 'CSS'],
      githubLink: 'https://github.com/Mudit-Tarway/CodeFolio',
      Link: 'https://codefolio-mudit.netlify.app/',
      category: 'ReactJS , CSS'
    },
    {
      id: 5,
      title: 'Course Selling Backend',
      description: 'A backend application for a course selling platform, features include user authentication and user can sees their accessed courses',
      image: '/public/backend.jpg',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/Mudit-Tarway/Coursera',
      Link: 'https://github.com/Mudit-Tarway/Coursera',
      category: 'Backend Development'
    }

  ];

  return (
    <div className="project-section">
      <p className="details1">Featured Projects</p>
      <p className="details2">Here are some of the projects I'm proud to have worked on.</p>
      
      <div className="ProjectContainer">
        {projects.map((project) => (
          <div className="ProjectCard" key={project.id}>
            <div 
              className="Image" 
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="image-overlay">
                <span className="category-badge">{project.category}</span>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link live-link"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

