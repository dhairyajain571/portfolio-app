import React from 'react'
import '../certifications/certification.css'
import Hack from "../../assets/hackerrank.png"
import Micro from "../../assets/micro.jpg"
import Up from "../../assets/upgrad.png"


const cert = [

    { id: 1,
     image: Hack,
     tittle: 'Java Script',
     credential: "https://www.hackerrank.com/certificates/757f99184cd7"
    },

    { id: 2,
        image: Hack,
        tittle: 'Python (basic)' ,
        credential: "https://www.hackerrank.com/certificates/dc0f78c94912"
    },

    { id: 3,
        image: Micro,
        tittle: 'Microsoft Certified: Azure AI Fundamentals' ,
        credential: "https://www.credly.com/badges/6a190a21-405c-4bf0-836e-a192dd2daf1c?source=linked_in_profile"
    },
    
    { id: 4,
        image: Up,
        tittle: 'React.js for beginners' ,
        credential: "https://www.credential.net/3dc33927-475c-40c9-b2aa-d2cf29b629ac"
    }
   
    
   
   ]


function Certification() {
  return (
    <section id='certifications'>
    <h5>What Makes Me Certified</h5>
      <h2>Certifications & Licenses</h2>
       <div className='certifications__container container'>
       
       {
          cert.map(({id , image , tittle , credential}) => {
            return (

            <div key={id} className="certification">
            <article className='certification__card'>
               <img className='certificate__image' src={image} alt="logo" />
               <h3 className='certificate__name'>{tittle}</h3>
               <div className='certificate__btn'><a className="btn" href={credential} target="/blank">Show Credentials</a></div>
            </article>
            </div>
             
            )
          })
        }

          



       </div> 
    </section>
  )
}

export default Certification