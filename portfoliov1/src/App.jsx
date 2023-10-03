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
          <li><Link to='#teste' smooth>About Me</Link></li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    <div id="home">
      <h1>I am Felipe Jacob</h1>
      <h2>Developer</h2>
    </div>
    <section id="teste">
    <div className='texto'>
      <h1>About Me</h1>
      <p>Hi! I am Felipe, a computer engineering student at University of Porto. I´ve been studying programming since high school and love creating new things!</p>
    </div>
    <img src={img1} alt="personal foto" width="300px" height="300px"/>
    </section>
    </BrowserRouter>
  )
}

export default App
