import { Technologies } from '../components/Technologies';
import React from "react";
import img1 from '../assets/IMG_2142.jpg';
import { motion } from 'framer-motion';
import {fadeIn, textVariant}  from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { about } from '../constants';

const AboutMe = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-around flex-col-reverse py-16 sm:flex-row'>
    <div className='flex flex-col w-1/2 md:h-screen md:p-32 md:justify-between'>
      <div className='content'>
        <motion.div variants={textVariant()}>
            <h1 className='sm:text-6xl text-4xl my-4'>About Me</h1>
        </motion.div>
        
        
        <motion.p
          variants={fadeIn("","",0,1,1)}
          className="mb-6 sm:text-lg text-md"
          >
          {about.presentation}
        </motion.p>
      </div>

      <Technologies className=" align-bottom"  />
    </div>
    <div className='flex justify-center'>
      <img src={img1} alt="personal photo" className=' aspect-square w-1/2 rounded-full border-solid border-white border-4 object-cover object-top' />
    </div>
    </div>
  )
}

export default SectionWrapper(AboutMe, "about")
  