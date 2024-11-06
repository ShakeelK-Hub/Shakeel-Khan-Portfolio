import React from 'react'
import '../Components/Experience.css'
import skills from '../Data/skills.json'
import history from '../Data/history.json'	


const getImageUrl = (imagePath) => {
  return require(`../Assets/${imagePath}`);
};
function Experience() {
  return (
    <section id='experience'>
      <h2>Experience</h2>
      <div>
        <div>

          {
            skills.map((skill,id) => {
              return <div key={id}>
              <div>
                <img src={getImageUrl(skill.imageSrc)} alt= {skill.title}/>
              </div>
              <p>{skill.title}</p>
              </div>
            })
          }
        </div>
        <ul>
          {
            history.map((historyItem,id) => {
              return <li key={id}>
                <img src={getImageUrl(historyItem.imageSrc)} alt= {historyItem.title}/>
             
              </li>
            })
          }
        </ul>
      </div>

    </section>
  )
}

export default Experience