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
            <p>I am a front end Developer</p>
        </div>
    </li>

    <li className='about-item' >
        <img src={img3} alt='server' />
        <div className='about-text'>
            <h3 className='about-item-title'>Backend Developer</h3>
            <p>I am a backend Developer</p>
        </div>
    </li>

    <li className='about-item' >
        <img src={img4} alt='User interface' />
        <div className='about-text'>
            <h3 className='about-item-title'>UI Designer</h3>
            <p>I am a UI Designer</p>
        </div>
    </li>
</ul>


 


      <div className='about-content'>
        <img src={img1} alt='Shakeel' className='about-img' />

        <ul className='about-s'>
    <li className='about-ss' title='I create responsive, dynamic, and user-focused front-end experiences using HTML, CSS, JavaScript, and React.'>
        
        <div className='about-intro'>
            <h3 className='about-para'>SHAKEEL KHAN</h3>
            <p>In my journey through software development, I have built a strong foundation in both theoretical concepts and practical application. My studies have focused on mastering core programming languages, such as C# and JavaScript, and exploring areas like web development, database management, and software engineering principles. Through hands-on projects, I’ve gained experience in the full software development lifecycle, from planning and designing to coding and testing. My academic work has also taught me to approach challenges logically and develop solutions that are both efficient and user-centered, skills that I’m eager to apply in real-world settings.</p>
        </div>
    </li>
    </ul>



        
      </div>
      
    </section>
  );
}

export default About;
