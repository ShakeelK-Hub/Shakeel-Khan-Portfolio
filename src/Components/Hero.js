import React from 'react';
import img1 from '../Assets/hero/S1.png';
import '../Components/Hero.css';
import CV from '../Assets/hero/CV.pdf';

function Hero() {
  return (
    <section className='hero-container'>

      <div className='hero-content'>
        
        <h1 className='hero-title'>Hi, I’m Shakeel</h1>

        <p className='hero-description'>
          An IT student with a passion for technology and continuous learning, 
          eager to contribute to the ever-changing world and seek opportunities to use skills in a dynamic IT environment.
          <br /><br />
          Reach out if you would like to learn more!
        </p>

        <div className="hero-button-container">
          <a href='mailto:601572@student.belgiumcampus.ac.za' className='hero-contact-btn'>Contact Me</a>
          <a href={CV} download='CV' className='hero-contact-btn'>Download CV</a>
        </div>

      </div>

      <img src={img1} alt='hero' className='hero-img' />

      <div className='hero-topcircle' />
      <div className='hero-bottomcircle' />

    </section>
    
  );
}

export default Hero;
