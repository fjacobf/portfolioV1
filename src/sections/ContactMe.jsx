import React from "react";
import { SectionWrapper } from "../hoc";
import { contacts } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const ContactMe = () => {
  return (<div className="flex items-center justify-around p-16 flex-col h-screen">
      <motion.p variants={textVariant()} className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-center">My socials</motion.p>
      <div className="flex flex-col gap-14">
        {contacts.map((contact, index)=> (
          <motion.div variants={fadeIn("up","spring",0.5,0.75)}>
            <a className="flex items-center inline-block" key={index} href={contact.link}>
              <img className=" sm:w-28 w-14 mr-3" src={contact.icon}/>
              <p className="md:text-5xl text-xl font-bold inline-block">
                {contact.username}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>)
}

export default SectionWrapper(ContactMe, "contact")