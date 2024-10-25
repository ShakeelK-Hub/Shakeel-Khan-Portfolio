import React from 'react'
import img1 from '../Assets/hero/S1.jpg';
import './Hero.css';
import CV from '../Assets/hero/CV.pdf'

function Hero() {





  return (
    <section className='container'>
        <div className='content'>
            <h1 className='title'>Hi, Im Shakeel</h1>

            <p className='description'>
                An IT student with a passion for technology and continuous learning, 
                eager to contribute to the ever-changing world and seek opportunities to use skills in a dynamic IT environment.<br></br><br></br>
                Reach out if you would like to learn more!
            </p>

            <div className="button-container">
    <a href='mailto:601572@student.belgiumcampus.ac.za' className='contactbtn'>Contact Me</a>
    <a href={CV} download='CV' className='contactbtn'>Download CV</a>
</div>

            
        </div>

        <img src={img1} alt='hero image' className='h-img'/>

        <div className='topcircle'/>      

        <div className='bottomcircle'/>

        

    </section>




  )
}

export default Hero