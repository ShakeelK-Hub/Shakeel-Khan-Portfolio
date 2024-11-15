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

      

        <ul className='about-items'>
    <li className='about-item' >
        <img src={img2} alt='cursor' /> 
        <div className='about-text'>
            <h3 className='about-item-title'>Front End Developer</h3>
            <span className='span1'>Combining creativity with functionality for impactful user experiences.</span>
        </div>
    </li>

    <li className='about-item' >
        <img src={img3} alt='server' />
        <div className='about-text'>
            <h3 className='about-item-title'>Backend Developer</h3>
            <span className='span1'>Ensuring efficient, secure, and robust backend operations.</span>
        </div>
    </li>

    <li className='about-item' >
        <img src={img4} alt='User interface' />
        <div className='about-text'>
            <h3 className='about-item-title'>UI Designer</h3>
            <span className='span1'>Transforming ideas into engaging and functional interfaces.</span>
        </div>
    </li>
</ul>


 


      <div className='about-content'>
        <img src={img1} alt='Shakeel' className='about-img' />

        <ul className='about-s'>
    <li className='about-ss' title='Shakeel Khan in essence'>
        
    <div className="about-intro">
    <h3 className="about-para">SHAKEEL KHAN</h3>
    <p className="about-paragraph">
        My current journey in software development has given me a solid grounding in both theoretical knowledge and hands-on application. I’ve focused my studies on key programming languages like C# and JavaScript and have explored critical areas such as web development, database management, and software engineering principles.
    </p>
    <p className="about-paragraph">
        Through practical projects, I’ve gained experience in each stage of the software development lifecycle—from planning and design to coding and testing. This hands-on work has taught me to approach challenges logically and to create solutions that are both efficient and user-centered.
    </p>
    <p className="about-paragraph">
        I am excited to bring these skills to real-world projects, where I can continue to grow and contribute as a developer.
    </p>
</div>


    </li>
    </ul>



        
      </div>
      
    </section>
  );
}

export default About;
