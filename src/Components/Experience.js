import React from 'react'
import '../Components/Experience.css'
import skills from '../Data/skills.json'
import history from '../Data/history.json'
	


const getImageUrl = (imagePath) => {
  return require(`../Assets/${imagePath}`);
};




function Experience() {

  function ImageOnClick(link) {
  window.open(link, "_blank", "noopener,noreferrer")
  }


  return (

    <section className='container' id='experience'>

      <h2 className='title'>Experience</h2>
      
      <div className='content'>
        
        <div className='skills'> 

          {
            skills.map((skill,id) => {

              return <div key={id} className='skill'>

              <div className='skill-image'>
                <img src={getImageUrl(skill.imageSrc)} alt= {skill.title}/>
              </div>

              <p>{skill.title}</p>

        </div>

            })
          }

        </div>

        <ul className='history'>
          {
            history.map((historyItem,id) => {

              return <li key={id} className='history-item'>
                
                <img src={getImageUrl(historyItem.imageSrc)} alt= {historyItem.title} onClick={() => ImageOnClick(historyItem.link)}
                style={{ cursor: 'pointer' }} />

                <div className='history-item-details'>

                  <h3 className='head1'>{`${historyItem.title},  ${historyItem.role}`}</h3>

                  <p className='head2'>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>

                  <ul>

                    {
                      historyItem.experiences.map

                      (
                        (experience, id) =>
                        <li key={id}>{experience}</li>
                      )

                    }
                  
                  
                  </ul>
                </div>
             
              </li>
            })
          }
        </ul>
      </div>

    </section>
  )
}

export default Experience