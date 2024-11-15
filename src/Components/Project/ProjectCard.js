import React from 'react';
import '../Project/ProjectCard.css';

const getImageUrl = (imagePath) => {
  return require(`../../Assets/${imagePath}`);
};


function ProjectCard({ project: { title, imageSrc, description, skills, demo, source } }) {

  function handleDemoClick  ()  {
    if (title === "Banking App") {
      window.open("https://drive.google.com/uc?id=1IQvR0rwTsH5z2fVZCBOPUBf_cPuzlkHL&export=download", "_blank");
    } else {
      window.open(demo, "_blank");
    }
  };
  
  

  return (

    <div className='container1'>

      <img src={getImageUrl(imageSrc)} alt={`Replacement of ${title}`} className='image'/>
      
      <h3 className='title1'>{title}</h3>

      <p className='description1'>{description}</p>

      <ul className='skills1'>
        {skills.map((skill, id) => (
          <li key={id} className='skill1'>{skill}</li>
        ))}
      </ul>

      <div className='links1'>
        <a href onClick={handleDemoClick} className='link1'>Demo</a>
        <a href={source} target="_blank" rel="noopener noreferrer" className='link1'>Source</a>
      </div>

    </div>
  );
}

export default ProjectCard;
