import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../Components/Contact.module.css';

function Contact() {
  return (

    <footer id="contact" className={styles.container}>

      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Your communication is always appreciated.</p>
      </div>


      <ul className={styles.links}>

        <li className={styles.link}>

          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />

          <a
            href="mailto:601572@student.belgiumcampus.ac.za"
            target="_blank"
            rel="noopener noreferrer"
          >
            Outlook - Shakeel Khan
          </a>

        </li>

        <li className={styles.link}>

          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />

          <a
            href="https://www.linkedin.com/in/shakeel-khan-b14264231/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn - Shakeel Khan
          </a>

        </li>

        <li className={styles.link}>

          <FontAwesomeIcon icon={faGithub} className={styles.icon} />

          <a
            href="https://github.com/ShakeelK-Hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub - Shakeel Khan
          </a>

        </li>

      </ul>

    </footer>
    
  );
}

export default Contact;
