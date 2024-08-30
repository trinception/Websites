"use client";

import React, { useState } from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (

      <li className={`${styles.card} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles.projectImage}>
        <img src={project.src} className={styles.previewImage} alt="project preview" width="auto" height="210px"/>
      </div>
      <div className={styles.project}>
        <h2>{project.title}</h2>
        <h4><span className={styles.bold}>Languages:</span> {project.languages}</h4>
        <h4><span className={styles.bold}>Technologies:</span> {project.technologies}</h4>
        <p className={styles.projectDescription}>
          {project.description}
        </p>
      </div>
      {isExpanded && (
        <span className={styles.viewMore}>
          {project.fullDescription}
        </span>
      )}
      <div className={styles.expand} onClick={toggleExpand}>
        <div className={styles.seeMoreContainer}>
          <div className={styles.seeMore}>
            <strong>{isExpanded ? 'Read less' : 'Read more...'}</strong>
            <span className={`${styles.arrow} ${isExpanded ? styles.up : ''}`}>&#709;</span>
          </div>
        </div>
      </div>

    </li>

  );
}

export default ProjectCard;
