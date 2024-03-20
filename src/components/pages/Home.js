import React from 'react'
import './Home.css'
import '../../App.css'
import BG from '../assets/profile.png';
import BG1 from '../assets/prof 1.jpg';

function Home() {
  return (
    <>
    <div className="content-container">
        <div className="container-text">
          <div className="text">
            <p className='hello'>— HELLO <span className='i-am'>I'M</span></p>
            <h2 className='intro'><span className='i-am1'>I'm</span> <span style={{color: "#A0153E"}} className='name'>Francis Jay</span> Bedes</h2>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus possimus sequi, quibusdam quos delectus officiis libero, laboriosam harum iusto voluptatem pariatur!</p>
            <p className='btn'><button className='button-cv'>DOWNLOAD CV</button></p>
          </div>
        </div>
        <div className="container-image">
        <img src={BG} alt="Description of the image" className="profile" />
        </div>
        </div>
    </>
  )
}

export default Home
