
import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   
    emailjs.sendForm('service_cta3mck', 'template_kye06tk', form.current, 'vTpOBOu-CvFgsuFtz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
       <div className="contact__options">
        <article className="contact__option">
           <AiOutlineMail className="contact__option-icon"/>
           <h4>Email</h4>
           <h5>jaindhairya571@gmail.com</h5>
           <a href="mailto:jaindhairya571@gmail.com">Send a Message</a>
        </article>

        <article className="contact__option">
           <BsLinkedin className="contact__option-icon"/>
           <h4>LinkedIn</h4>
           <h5>Dhairya Kumar Jain</h5>
           <a href="https://www.linkedin.com/in/dhairya-kumar-jain-3bb1b8203/" target="_blank">Send a Message</a>
        </article>

        <article className="contact__option">
           <BsWhatsapp className="contact__option-icon"/>
           <h4>Whatsapp</h4>
           <h5>+91 6350617329</h5>
           <a href="https://api.whatsapp.com/send?phone+916350617329" target="_blank">Send a Message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="text" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact