import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
      </div>
      
      <div className="about__content">
        
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>4+ months</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Professional Connections</h5>
            <small>400+ Worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>5+ completed Projects</small>
          </article>
        </div>

        <p>
        Knowledgeable and detail-oriented developer accustomed to working in fast-paced and deadline-driven environments. 
Currently working as an Assistant Project manager at ILIOS Health and also an Indie Game Developer on personal Unity 3D game projects like Endless Runner and other Adventurous Level-based Games.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About