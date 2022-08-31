import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Rebel.png'
import IMG2 from '../../assets/3D.png'
import IMG3 from '../../assets/ball.png'
import IMG4 from '../../assets/ilios_web.png'
import IMG5 from '../../assets/post.png'
import IMG6 from '../../assets/UI.png'



const data = [

 { id: 1,
  image: IMG1,
  tittle: 'Rebel Yell Website',
  github: "https://github.com/dhairyajain571/project2021.git",
  demo: "https://dhairyajain571.github.io/project2021/"
 },
 { id: 2,
  image: IMG2,
  tittle: 'Cube Runner 3D',
  github: "https://github.com/dhairyajain571/CuberRunner3D.git",
  demo: "https://simmer.io/@djdevilbeast/cube-runner"
 },
 { id: 1,
  image: IMG3,
  tittle: 'Bounce Ball 3D',
  github: "https://github.com/dhairyajain571/Bounce-Ball-3D.git",
  demo: "https://simmer.io/@djdevilbeast/bounce-ball-3d"
 },
 { id: 1,
  image: IMG4,
  tittle: 'iLiOS Introductory Video',
  github: "https://github.com/dhairyajain571/iLiOS-Animations.git",
  demo: "https://www.youtube.com/watch?time_continue=3&v=KneeRmUeiHU&feature=emb_logo"
 },
 { id: 5,
  image: IMG5,
  tittle: 'iLiOS Promotional Posts',
  github: "https://github.com/dhairyajain571/iLiOS-Posts.git",
  demo: "https://www.instagram.com/p/CgtkB3kr6x7/?igshid=YmMyMTA2M2Y="
 },
 { id: 6,
  image: IMG6,
  tittle: 'UI Wireframes For SahiDoc (iLiOS Product)',
  github: "https://github.com/dhairyajain571/UI-SahiDoc.git",
  demo: "https://xd.adobe.com/view/c517982e-9b2e-4e3a-8e89-0108400a90da-9044/?fullscreen"
 },

]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id , image , tittle , github , demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                 <div className='portfolio__item-image'>
                    <img src={image} alt={tittle} />
                  </div>
                   <h3>{tittle}</h3>
                  <div className="portfolio__item-cta">
                      <a href={github} className='btn' target="_blank">Github</a>
                      <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                  </div>
              </article>
            )
          })
        }
        

      </div>
    </section>
  )
}

export default Portfolio