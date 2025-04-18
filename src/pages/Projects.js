import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../Portfolio';


export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then(setProjects);
  }, []);

  return (
    <div className="projects-page">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((proj) => (
          <div className="project-card" key={proj._id}>
            <h3>{proj.name}</h3>
            <p>{proj.summary}</p>
            <p><strong>Tech Stack:</strong> {proj.techStack}</p>
            <p>Website Link: {proj.projectLink && <a href={proj.projectLink} target='_blank' rel="noopener noreferrer">{proj.name}</a>}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
