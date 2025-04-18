import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../Portfolio';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="home">

      <section className="hero">
        <h1>Hi, I'm Srivignesh Kavle S</h1>
        <p>A passionate full-stack web developer with expertise in modern web technologies and a strong problem-solving mindset.</p>
        <Link to="/projects"><button>View My Work</button></Link>
      </section>

      <section className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {[
            "HTML5 & CSS3", "JavaScript (ES6+)", "Node.js & Express",
            "MongoDB & Mongoose", "Pug Template Engine",
            "C# & ASP.NET Core", "Database Design (MySQL, PostgreSQL)",
            "WordPress & PHP", "Python & Machine Learning"
          ].map((skill, idx) => (
            <div className="skill-card" key={idx}>{skill}</div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {featuredProjects.map(project => (
            <div className="project-card" key={project._id}>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <Link to="/projects">
                <button>
                  {project.name.includes('Converter') ? 'Explore More' : 'Learn More'}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
