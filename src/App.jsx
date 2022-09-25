import React from 'react-dom'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonial'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Certification from './components/certifications/Certification'



const App = () => {
  return (
    <>
       <Header />
       <Nav />
       <About />
       <Experience />
       <Services />
       <Portfolio />
       <Certification />
       {/* <Testimonial /> */}
       <Contact />
       <Footer />
    </>
  )
}

export default App