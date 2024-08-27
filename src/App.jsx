import Projects from './sections/Projects';
import { Hero } from './sections/Hero';
import ContactMe from './sections/ContactMe.jsx';
import AboutMe from './sections/AboutMe.jsx';
import Navbar from './components/Navbar.jsx';
import Experience from './sections/Experiences.jsx';
import {BrowserRouter} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>

    <Navbar/>

    <Hero/>

    <AboutMe/>

    <Experience/>

    <Projects/>

    <ContactMe/>

    </BrowserRouter>
  )
}

export default App
