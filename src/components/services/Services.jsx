import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Like</h5>
      <h2>Achievements & Interests</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Non-Technical Skills</h3>
          </div>
          <ul className='service__list'>
             <li><BiCheck className='service__lis-icon' />
             <p>Graphic Designing</p>
             </li>
             <li><BiCheck className='service__lis-icon' />
             <p>Art & Sketching</p>
             </li>
             <li><BiCheck className='service__lis-icon' />
             <p>Media Marketing</p>
             </li>
             <li><BiCheck className='service__lis-icon' />
             <p>Critical & Analytical Thinking</p>
             </li>
             <li><BiCheck className='service__lis-icon' />
             <p>Video Editing</p>
             </li>
           </ul>
        </article>


      
        <article className='service'>
          <div className="service__head">
            <h3>Achievements</h3>
          </div>
          <ul className='service__list'>
             <li><BiCheck className='service__lis-icon' />
             <p>Captain Cytron Club, Students' Council Year 20-21. </p>
             </li>
             <li><BiCheck className='service__lis-icon' />
             <p>Core Coordinator- All India Level RTU Kota Hackathon 2021. </p>
             </li>
             <li><BiCheck className='service__lis-icon' />
             <p>Team Leader - College Events Like Freshers, Farewell ,Gaming Tournaments and Annual Fest.</p>
             </li>
             <li><BiCheck className='service__lis-icon' />
             <p>Member of Helping Hands Group NGO and Ideal Society. </p>
             </li>
             <li><BiCheck className='service__lis-icon' />
             <p>Volunteered Technical Fest Pryag</p>
             </li>
           </ul>
        </article>
      </div>
    </section>
  )
}

export default Services