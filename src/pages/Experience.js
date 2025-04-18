import React, { useEffect, useState } from 'react';
import { fetchExperiences } from '../Portfolio';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchExperiences().then(setExperiences);
  }, []);

  return (
    <div className="experience-page">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <div className="experience-card" key={exp._id}>
            <h3>{exp.jobtitle} – {exp.company}</h3>
            <p>{exp.location}</p>
            <p>{exp.startYear} – {exp.endYear}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
