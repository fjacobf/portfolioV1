import { Projects } from './sections/Projects';
import { Hero } from './sections/Hero';
import { ContactMe } from './sections/ContactMe.jsx';
import { AboutMe } from './sections/AboutMe.jsx';
import { Navbar } from './components/Navbar.jsx';
import {BrowserRouter} from 'react-router-dom';
import {about, projects} from './constants.js';
import './App.css'

function App() {
  return (
    <BrowserRouter>

    <Navbar     />

    <Hero     />

    <AboutMe   about={about}  />

    <Projects   projects={projects}  />

    <ContactMe     />

    </BrowserRouter>
  )
}

export default App
