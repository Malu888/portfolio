import React from 'react'
import styles from './Projects.module.css'
import projects from '../../../data/projects.json'


function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}> Projects</h2>
      <div className={styles.cardContainer}>
      {projects.map((eachProject, i) => (
<div key={i} className={styles.card}>
<h2 className={styles.titleProjects}>{eachProject.title}</h2>
<img src={eachProject.imageSrc} alt={eachProject.title} className={styles.image}/>
<p className={styles.description}>{eachProject.description}</p>
<p className={styles.description}>{eachProject.skils}</p>
<a href={eachProject.demo} target="_blank" className={styles.link}>Take a look</a>
</div>
      ))}
      </div>
    </section>
  )
}

export default Projects