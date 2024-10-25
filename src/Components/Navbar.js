import React, { useState } from 'react';
import './Navbar.css';

import menubtn from '../Assets/nav/menuIcon.png';
import closeicon from '../Assets/nav/closeIcon.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
        
      <a href='/' className='port'>Portfolio</a>

      <div className='menu'>

        <img
          className='menubutton'
          src={menuOpen ? closeicon : menubtn}
          onClick={() => setMenuOpen(!menuOpen)}
          alt={menuOpen ? 'close menu' : 'open menu'}
        />

        <ul className={`menuitems ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
          <li><a href='#about' className='title'>About</a></li>
          <li><a href='#experience' className='title'>Experience</a></li>
          <li><a href='#projects' className='title'>Projects</a></li>
          <li><a href='#contact' className='title'>Contact</a></li>
        </ul>

      </div>

    </nav>
  );
}

export default Navbar;
