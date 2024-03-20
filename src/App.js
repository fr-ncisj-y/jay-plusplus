import { Navigate ,Routes ,Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <>
    
    <Router>
      <div className='container'>
        <div className="main-container">
          <div className="navigation-bar">
            <NavBar/>
          </div>
          <div className="content">
            <Routes>
            <Route path="fr-ncisj-y.github.io/jay-plusplus" element={<Navigate to="fr-ncisj-y.github.io/jay-plusplus/" replace={true} />} />
              <Route path="fr-ncisj-y.github.io/jay-plusplus/" element={<Home />} />
            </Routes>
          </div>
          <div className="socials">
            <a href='' className='messenger'><FontAwesomeIcon icon={faFacebookMessenger} /></a>
            <a href='' className='linkedin'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href='' className='github'><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </div>
    </Router>
     
     </>
  );
}

export default App;
