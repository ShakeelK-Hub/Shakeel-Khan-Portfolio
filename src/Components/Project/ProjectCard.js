import React from 'react'
import '../Project/ProjectCard.css'




const getImageUrl = (imagePath) => {
    return require(`../../Assets/${imagePath}`);
  };

  

function ProjectCard({project: {title, imageSrc, description, skills, demo, source}}) {
  return (
    <div className='container1'>
              <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className='image'/>
              
              <h3 className='title1'>{title}</h3>
              <p className='description1'>{description}</p>

              <ul className='skills1'>
                {
                  skills.map((skill,id) => {
                    return <li key={id} className='skill1'>{skill}</li>;
                  })
                }
              </ul>

              <div className='links1'>

                <a href={demo} target="_blank" rel="noopener noreferrer" className='link1'>Demo</a>
                <a href={source} target="_blank" rel="noopener noreferrer" className='link1'>Source</a>




              </div>
            </div>
  )
}

export default ProjectCard