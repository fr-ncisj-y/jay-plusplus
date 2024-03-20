import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
import '../App.css'

function NavBar() {
  
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  console.log(itemName)}

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="fr-ncisj-y.github.io/jay-plusplus/" className={activeItem === 'home' ? 'active' : ''} onClick={() => handleItemClick('home')}>HOME</Link>
        <Link to="fr-ncisj-y.github.io/jay-plusplus/about" className={activeItem === 'about' ? 'active' : ''} onClick={() => handleItemClick('about')}>ABOUT</Link>
        <Link to="fr-ncisj-y.github.io/jay-plusplus/portfolio" className={activeItem === 'portfolio' ? 'active' : ''} onClick={() => handleItemClick('portfolio')}>PORTFOLIO</Link>
        <Link to="fr-ncisj-y.github.io/jay-plusplus/resume" className={activeItem === 'resume' ? 'active' : ''} onClick={() => handleItemClick('resume')}>RESUME</Link>
        <Link to="fr-ncisj-y.github.io/jay-plusplus/contact" className={activeItem === 'contact' ? 'active' : ''} onClick={() => handleItemClick('contact')}>CONTACT</Link>
      </div>
    </nav>
    </>
  )
}

export default NavBar
