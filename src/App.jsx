import { ContactMe } from './ContactMe';
import { AboutMe } from './AboutMe.jsx';
import { Navbar } from './Navbar';
import './App.css'
import {BrowserRouter} from 'react-router-dom';
import img1 from './assets/IMG_5557.jpg';
import {about} from './constants.js';

function App() {
  return (
    <BrowserRouter>
    <Navbar     />

    <div id="home" className='bg-high-contrast bg-cover h-[100vh] flex justify-center flex-col items-center'>
      <h1 className='text-9xl font-extrabold'>Hi! I'm <span className='bg-[linear-gradient(to_right,theme(colors.amber.500),theme(colors.amber.300),theme(colors.violet.400),theme(colors.violet.500),theme(colors.violet.400),theme(colors.amber.300),theme(colors.amber.500))] animate-gradient bg-[length:200%_auto] bg-clip-text text-transparent'>Felipe!</span></h1>
      <h2 className='text-7xl'>Developer</h2>
    </div>

    <AboutMe   about={about} img1={img1}  />

    <section id="projects" className='flex-col justify-between p-24'>
      <h1>Projects</h1>
      <div className="projects-trail w-full h-5/6 grid grid-flow-col gap-10 overflow-x-scroll no-scrollbar ">
        <div className="project-card w-[500px] h-full rounded-xl bg-gray-400">
          <h2>App</h2>
        </div>
        <div className="project-card w-[500px] h-full rounded-xl bg-gray-400">  
          <h2>App</h2>
        </div>
        <div className="project-card w-[500px] h-full rounded-xl bg-gray-400">
          <h2>App</h2>
        </div>
        <div className="project-card w-[500px] h-full rounded-xl bg-gray-400">
          <h2>App</h2>
        </div>
        <div className="project-card w-[500px] h-full rounded-xl bg-gray-400">
          <h2>App</h2>
        </div>
        
        
      </div>
    </section>

    <ContactMe     />

    </BrowserRouter>
  )
}

export default App
