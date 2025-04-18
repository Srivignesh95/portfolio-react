import React, { useEffect, useState } from 'react';
import { fetchProjects, fetchExperiences } from '../Portfolio';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProjects()
      .then(data => setProjects(data))
      .catch(err => setError("Error fetching projects"));

    fetchExperiences()
      .then(data => setExperiences(data))
      .catch(err => setError("Error fetching experiences"));
  }, []);

  return (
    <div className="App">
      <h1>Srivignesh Kavle S – Full Stack Developer</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <section>
        <h2>Projects</h2>
        {projects.map((proj) => (
          <div className="project-card" key={proj._id}>
            <h3>{proj.name}</h3>
            <p>{proj.summary}</p>
            <p><strong>Tech Stack:</strong> {proj.techStack}</p>
            {proj.projectLink && <a href={proj.projectLink}>Live</a>}
            {proj.repoLink && <a href={proj.repoLink}>Code</a>}
          </div>
        ))}
      </section>

      <section>
        <h2>Experience</h2>
        {experiences.map((exp) => (
          <div className="experience-card" key={exp._id}>
            <h3>{exp.jobtitle} – {exp.company}</h3>
            <p>{exp.location}</p>
            <p>{exp.startYear} – {exp.endYear}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
