import React from 'react'
import CV from '../../assets/cv.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={CV} className="btn" download>Download Cv</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        <iframe src="https://webxr.run/ozkJolmAnApWZ" width="100%" height="100%" frameborder="0" loading="lazy" allow="camera; gyroscope; accelerometer; magnetometer; xr-spatial-tracking;"></iframe>
    </div>
  )
}

export default CTA