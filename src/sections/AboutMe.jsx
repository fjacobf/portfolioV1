import { Technologies } from '../components/Technologies';
import React from "react";
import img1 from '../assets/IMG_2142.jpg';
import { motion } from 'framer-motion';
import {fadeIn, textVariant}  from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { about } from '../constants';

const AboutMe = () => {
  return (
    <>
    <div className='flex flex-col w-1/2 h-screen p-32 flex justify-between'>
      <div className='content'>
        <motion.div variants={textVariant()}>
            <h1 className='text-6xl my-4'>About Me</h1>
        </motion.div>
        
        
        <motion.p
          variants={fadeIn("","",0,1,1)}
          className="mb-6 text-lg"
          >
          {about.presentation}
        </motion.p>
      </div>

      <Technologies className=" align-bottom"  />
    </div>
    <div className='flex w-1/2 justify-center'>
      <img src={img1} alt="personal photo" className=' aspect-square w-1/2 rounded-full border-solid border-white border-4 object-cover object-top' />
    </div>
    </>
  )
}

export default SectionWrapper(AboutMe, "about")
  