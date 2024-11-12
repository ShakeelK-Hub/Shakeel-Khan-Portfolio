import React from 'react'
import '../Project/Projects.css'
import projects from '../../Data/projects.json'
import ProjectCard from '../Project/ProjectCard'
import ProjectList from './ProjectList'




function Projects() {
  return (
    <section className='container'>
      
      <h2 className='title'>Projects</h2>

      <div className='projects'>
       

          <ProjectList projects={projects}/>


      </div>
    
    
    
    
    
    </section>
  )
}

export default Projects