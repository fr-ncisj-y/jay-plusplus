import { Link ,Routes ,Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/pages/Home'

function App() {
  return (
    <>
    <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
     
     </>
  );
}

export default App;
