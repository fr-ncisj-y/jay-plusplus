import React from 'react'
import './Home.css'
import '../../App.css'
import BG from '../assets/profile.png';

function Home() {
  return (
    <>
    <div className="content-container">
        <div className="container-text">
          <div className="text">
            <p className='hello'>— HELLO </p>
            <h2 className='intro'>I'm <span style={{color: "#A0153E"}} className='name'>Francis Jay</span> Bedes</h2>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus possimus sequi, quibusdam quos delectus officiis libero, laboriosam harum iusto voluptatem pariatur!</p>
            <p className='hello'><button className='button-cv'>DOWNLOAD CV</button></p>
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
