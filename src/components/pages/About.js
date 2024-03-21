import React from 'react';
import './About.css';
function About() {
  return (
    <div className='about-container'>
        <div className="about-text">
        <div className="main-desc">
        <h1 className='text-greetings'>nice to meet you.</h1>
        <p className='text-introduction'> I'm <span style={{color: "#A0153E"}} className='name'>FRANCIS JAY</span>, a passionate software engineer with a knack for crafting robust, scalable solutions. With a focus on Java Spring Boot, I specialize in developing microservices and APIs that power modern applications.</p>
        <p className='bottom'>I'm always eager to connect with fellow developers, tech enthusiasts, and potential collaborators. Whether you want to discuss a project, share ideas, or just chat about the latest tech trends, feel free to reach out!</p>
        <div className="scroll-container">
        <span className='scroll-down'>SCROLL DOWN</span>
        </div>
        
        </div>
        </div>
        <div className="about-desc">
        <div className="main-text">
          <h1 style={{color: "#A0153E"}}>Expertise</h1>
          <div className="exp-items">
          <h2>🚀 Java Spring Boot</h2>
        <p className='descrip'>My bread and butter! I thrive on leveraging the power of Spring Boot to create efficient and maintainable backend systems.</p>
        </div>
        <div className="exp-items">
          <h2>🌐 Microservices and APIs</h2>
        <p className='descrip'>I have a strong foundation in designing and implementing microservices architectures, ensuring flexibility and scalability for complex applications. Crafting RESTful APIs is where I excel.</p>
        </div>
        <div className="exp-items">
          <h2>🔒 API Management</h2>
        <p className='descrip'>Proficient in Apigee Edge, I ensure that APIs are securely managed, monitored, and optimized for performance and reliability.</p>
        </div>
        <div className="exp-items">
          <h2>🌟 Frontend Development</h2>
        <p className='descrip'>I don't stop at the backend! I love diving into Angular and ReactJS to bring intuitive user interfaces to life, creating seamless experiences for end-users.</p>
        </div>
        <div className="exp-items">
          <h2>☁️ Microservices Deployment</h2>
        <p className='descrip'>I'm well-versed in deploying microservices to Kubernetes clusters, orchestrating containers efficiently for high availability and scalability.</p>
        </div>
        </div>
          
        </div>
      
    </div>
  )
}

export default About
