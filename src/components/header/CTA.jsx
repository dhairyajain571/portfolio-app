import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={CV} className="btn" download>Download Cv</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default CTA
