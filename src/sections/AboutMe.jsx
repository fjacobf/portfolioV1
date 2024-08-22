import { Technologies } from '../components/Technologies';
import React from "react";
import img1 from '../assets/IMG_2142.jpg';

export function AboutMe({ about }) {

  return <section id="about me" className=' flex flex-col-reverse md:p-48 md:flex-row'>
      <div className='flex flex-col w-1/2'>
        <h1>About Me</h1>
        <p>{about.presentation}</p>

        <Technologies  />
      </div>
      
      <img src={img1} alt="personal photo" className=' aspect-square w-[15rem] rounded-full border-solid border-white border-4 object-cover object-top' />
    </section>;
}
  