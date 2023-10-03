import './App.css'
import {BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import img1 from './assets/IMG_5557.jpg'
function App() {
  return (
    <BrowserRouter>
    <header>
      <h1>Felipe Jacob</h1>
    <nav>
        <ul>
          <li><Link to='#home' smooth>Home</Link></li>
          <li><Link to='#about me' smooth>About Me</Link></li>
          <li><Link to='#projects' smooth>Projects</Link></li>
          <li><Link to='#contact' smooth>Contact</Link></li>
        </ul>
      </nav>
    </header>
    <div id="home">
      <h1>I am Felipe Jacob</h1>
      <h2>Developer</h2>
    </div>
    <section id="about me">
    <div className='texto'>
      <h1>About Me</h1>
      <p>Hi! I am Felipe, a computer engineering student at University of Porto. I´ve been studying programming since high school and love creating new things!</p>
    </div>
    <img src={img1} alt="personal foto" width="300px" height="300px"/>
    </section>
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-trail">
        <div className="project-card">
          <h2>App</h2>
        </div>
      </div>
    </section>
    <section id="contact">
      <h1>Contact Me</h1>
      <form action="">
        <label htmlFor="FullName">Full Name</label>
        <input type="text" />
        <label htmlFor="Email">Email</label>
        <input type="text" />
        <label htmlFor="Message">Message</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
    </section>
    </BrowserRouter>
  )
}

export default App
