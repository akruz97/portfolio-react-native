import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Resume from './components/Resume'
import Experiences from './components/Experiences'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Resume />
      <AboutMe />
      <Experiences />
      <Projects />
      <Footer />
    </>
  )
}

export default App
