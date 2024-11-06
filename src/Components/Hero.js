import React from 'react';
import img1 from '../Assets/hero/S1.png';
import '../Components/Hero.css';
import CV from '../Assets/hero/CV.pdf';

function Hero() {
  return (
    <section className='hero-container'>

      <div className='hero-content'>


        <h4 className='subtit'>Student Software Developer</h4>
        <h1 className='hero-title'>Hi, I’m Shakeel</h1>

        <p className='hero-description'>
         Building Tomorrow's Solutions Today<br /><br />
         A passionate and dedicated student of software development. With a keen eye for detail and a drive for excellence, I am committed to crafting elegant and efficient code. My journey in software development is fueled by a love for problem-solving and a desire to create innovative solutions that make a difference.
          <br /><br />
         
          Let’s connect and explore the endless possibilities of technology together!
        </p>

        <div className="hero-button-container">
          
          <a href={CV} download='CV' className='hero-contact-btn'>Download CV</a>
          <a href='mailto:601572@student.belgiumcampus.ac.za' className='hero-contact-btn'>Contact Me</a>
        </div>

      </div>

      <div className='hero-image-container'>
        
      <img src={img1} alt='hero' className='hero-img' />

      <div className='hero-icons'>

        <a href='https://github.com/ShakeelK-Hub' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-github'></i>
        </a>

        <a href='mailto:601572@student.belgiumcampus.ac.za'>
          <i className='fas fa-envelope'></i>
        </a>

        <a href='https://www.linkedin.com/in/shakeel-khan-b14264231/' target='_blank' rel='noopener noreferrer'>
          <i className='fab fa-linkedin'></i>
        </a>
        
      </div>
      
      </div>


      <div className='hero-topcircle' />
      <div className='hero-bottomcircle' />

    </section>
    
  );
}

export default Hero;
