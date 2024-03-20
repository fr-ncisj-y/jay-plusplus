import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  console.log(itemName)}

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="jay-plusplus/" className={activeItem === 'home' ? 'active' : ''} onClick={() => handleItemClick('home')}><span className='navText'>HOME</span><FontAwesomeIcon icon={faHouse} className='navIcon'/></Link>
        <Link to="jay-plusplus/about" className={activeItem === 'about' ? 'active' : ''} onClick={() => handleItemClick('about')}><span className='navText'>ABOUT</span><FontAwesomeIcon icon={faUser} className='navIcon'/></Link>
        <Link to="jay-plusplus/portfolio" className={activeItem === 'portfolio' ? 'active' : ''} onClick={() => handleItemClick('portfolio')}><span className='navText'>PORTFOLIO</span><FontAwesomeIcon icon={faFolder} className='navIcon'/></Link>
        <Link to="jay-plusplus/resume" className={activeItem === 'resume' ? 'active' : ''} onClick={() => handleItemClick('resume')}><span className='navText'>RESUME</span><FontAwesomeIcon icon={faFile} className='navIcon'/></Link>
        <Link to="jay-plusplus/contact" className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleItemClick('contact')}><span className='navText'>CONTACT</span><FontAwesomeIcon icon={faPhone} className='navIcon'/></Link>
      </div>
    </nav>
    </>
  )
}

export default NavBar
