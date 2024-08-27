import {React, useRef} from "react";
import {HashLink as Link} from 'react-router-hash-link';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

const Navbar = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    )
  }

  return (
    <header className=' backdrop-blur-sm fixed flex flex-row justify-between w-[100vw] py-6 px-4 z-10'>
      <h1 className="text-3xl sm:text-5xl">Felipe Jacob</h1>
      <nav ref={navRef} className='flex items-center'>
        <ul className='w-[50vw] lg:flex flex-row justify-between items-center text-center'>
          <li className='list-none text-3xl font-bold uppercase'><Link to='#home' smooth onClick={showNavbar}>Home</Link></li>
          <li className='list-none text-3xl font-bold uppercase'><Link to='#about' smooth onClick={showNavbar}>About</Link></li>
          <li className='list-none text-3xl font-bold uppercase'><Link to='#experience' smooth onClick={showNavbar}>Experiences</Link></li>
          <li className='list-none text-3xl font-bold uppercase'><Link to='#projects' smooth onClick={showNavbar}>Projects</Link></li>
          <li className='list-none text-3xl font-bold uppercase'><Link to='#contact' smooth onClick={showNavbar}>Contact</Link></li>
        </ul>
        <img className="nav-btn nav-close-btn" src={close} alt="close menu" onClick={showNavbar} />
      </nav>
        <img
        src={menu}
        onClick={showNavbar}
        alt="menu"
        className="nav-btn"
        />
    </header>
  )
}

export default Navbar;
  