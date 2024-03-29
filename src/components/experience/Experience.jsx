import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
           <h3>Frontend Development And Other Tech</h3>
           <div className="experience__content">
            <article className='experience__details'>
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>HTML</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>CSS</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>SalesForce</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>JavaScript</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>Bootstrap</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>Node.js</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>React.js</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>Ruby on Rails</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className="experience__details-icon"/>
               <div>
               <h4>Python</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
           </div>

        </div>
      
        <div className="experience__backend">
        <h3>Game Development</h3>
           <div className="experience__content">
            <article className='experience__details'>
               <BsPatchCheckFill className="experience__details-icon" />
               <div>
               <h4>Unity Engine</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className="experience__details-icon" />
               <div>
               <h4>Unity 3D</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill className="experience__details-icon" />
               <div><h4>C#</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill  className="experience__details-icon"/>
               <div>
               <h4>Web GL</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
            <article className='experience__details'>
               <BsPatchCheckFill  className="experience__details-icon"/>
               <div>
               <h4>2D Animation</h4>
               <small className='text-light'>Experienced</small> 
               </div>
            </article>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience