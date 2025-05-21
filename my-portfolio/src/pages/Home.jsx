import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Contact from '../components/home/Contact'
import Skills from '../components/home/Skills'
import Testimonials from '../components/home/Testimonials'
import Projects from '../components/home/Projects'
import Education from '../components/home/Education'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        < Education/>
      <Testimonials />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home