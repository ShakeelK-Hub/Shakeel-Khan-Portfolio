import React from 'react';
import '../Components/About.css';
import img1 from '../Assets/about/aboutImage.png';
import img2 from '../Assets/about/cursorIcon.png';
import img3 from '../Assets/about/serverIcon.png';
import img4 from '../Assets/about/uiIcon.png';

function About() {
  return (
    <section className='about-container' id='about'>

      <h2 className='about-title'>About</h2>

      <div className='about-content'>
        <img src={img1} alt='Shakeel' className='about-img' />

        <ul className='about-items'>

          <li className='about-item'>
            <img src={img2} alt='cursor' />

            <div className='about-text'>
              <h3>Front End Developer</h3>
              <p>I am a front end Developer</p>
            </div>

          </li>

          <li className='about-item'>
            <img src={img3} alt='server' />

            <div className='about-text'>
              <h3>Backend Developer</h3>
              <p>I am a backend Developer</p>
            </div>

          </li>

          <li className='about-item'>
            <img src={img4} alt='User interface' />

            <div className='about-text'>
              <h3>UI Designer</h3>
              <p>I am a backend Developer</p>
            </div>

          </li>

        </ul>

      </div>
      
    </section>
  );
}

export default About;
