import React from 'react'
import CV from '../../assets/Workshop.zip'

function CTA() {
  return (
    <div className="cta">
        <a href={CV} className="btn" download>Download Files</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA