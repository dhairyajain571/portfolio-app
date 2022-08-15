import React from 'react'
import './footer.css'
import {BsWhatsapp} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Dhairya</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Services</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      

      <div className='footer__socials'>
        <a href="https://instagram"><BsInstagram /></a>
        <a href="https://linkedin"><BsLinkedin/></a>
        <a href="https://github"><BsGithub/></a>
        <a href="https://whatsapp"><BsWhatsapp/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Dhairya Kumar Jain. All rights reserved</small>
      </div>


    </footer>
  )
}

export default Footer