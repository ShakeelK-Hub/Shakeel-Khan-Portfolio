import React from 'react'
import '../Project/Projects.css'
import projects from '../../Data/projects.json'
import ProjectList from './ProjectList'




function Projects() {
  return (
    <section id='projects'>
      
      <h2 className='title'>Projects</h2>

      <div className='projects'>
       

          <ProjectList projects={projects}/>


      </div>
    
    
    
    
    
    </section>
  )
}

export default Projects