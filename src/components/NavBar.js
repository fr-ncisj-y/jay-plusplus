import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

function NavBar() {
  
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  console.log(itemName)}

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className={activeItem === 'home' ? 'active' : ''} onClick={() => handleItemClick('home')}>HOME</Link>
        <Link to="/about" className={activeItem === 'about' ? 'active' : ''} onClick={() => handleItemClick('about')}>ABOUT</Link>
        <Link to="/portfolio" className={activeItem === 'portfolio' ? 'active' : ''} onClick={() => handleItemClick('portfolio')}>PORTFOLIO</Link>
        <Link to="/resume" className={activeItem === 'resume' ? 'active' : ''} onClick={() => handleItemClick('resume')}>RESUME</Link>
        <Link to="/contact" className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleItemClick('contact')}>CONTACT</Link>
      </div>
    </nav>
    </>
  )
}

export default NavBar
