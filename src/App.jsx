import './App.css'
import {BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import img1 from './assets/IMG_5557.jpg'
function App() {
  return (
    <BrowserRouter>
    <header className=' backdrop-blur-sm fixed flex flex-row justify-between w-full py-6 px-48'>
      <h1>Felipe Jacob</h1>
    <nav className='flex items-center'>
        <ul className='w-[50vw] flex flex-row justify-between items-center'>
          <li className='list-none text-3xl font-bold uppercase'><Link to='#home' smooth>Home</Link></li>
          <li className='list-none text-3xl font-bold uppercase'><Link to='#about me' smooth>About Me</Link></li>
          <li className='list-none text-3xl font-bold uppercase'><Link to='#projects' smooth>Projects</Link></li>
          <li className='list-none text-3xl font-bold uppercase'><Link to='#contact' smooth>Contact</Link></li>
        </ul>
      </nav>
    </header>

    <div id="home" className='bg-high-contrast bg-cover h-[100vh] flex justify-center flex-col items-center'>
      <h1>I am Felipe Jacob</h1>
      <h2>Developer</h2>
    </div>

    <section id="about me" className='p-48'>
      <div className='flex flex-col w-1/2'>
        <h1>About Me</h1>
        <p>Hi! I am Felipe, a computer engineering student at University of Porto. I´ve been studying programming since high school and love creating new things!</p>
      </div>
      <img src={img1} alt="personal photo" className=' aspect-square w-[300px] rounded-full border-solid border-white border-4 object-cover object-top'/>
    </section>

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

    <section id="contact" className='flex-col justify-center px-80'>
      <h1>Contact Me</h1>
     
    </section>

    </BrowserRouter>
  )
}

export default App
