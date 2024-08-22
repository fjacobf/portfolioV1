import React from "react";
import {HashLink as Link} from 'react-router-hash-link';
export function Navbar({}) {
  return <header className=' backdrop-blur-sm fixed flex flex-row justify-between w-full py-6 px-4 lg:px-48'>
      <h1>Felipe Jacob</h1>
    <nav className='flex items-center'>
        <ul className='w-[50vw] md:flex flex-row justify-between items-center'>
          <li className='list-none text-3xl font-bold uppercase'><Link to='#home' smooth>Home</Link></li>
          <li className='list-none text-3xl font-bold uppercase'><Link to='#about me' smooth>About Me</Link></li>
          <li className='list-none text-3xl font-bold uppercase'><Link to='#projects' smooth>Projects</Link></li>
          <li className='list-none text-3xl font-bold uppercase'><Link to='#contact' smooth>Contact</Link></li>
        </ul>
      </nav>
    </header>;
}
  