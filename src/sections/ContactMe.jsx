import React from "react";
import { SectionWrapper } from "../hoc";
import { contacts } from "../constants";
const ContactMe = () => {
  return (<div className="flex items-center justify-between p-16 flex-col h-screen">
      <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-center">My socials</h1>
      <div className="flex flex-col gap-14">
        {contacts.map((contact, index)=> (
          <a className="flex items-center inline-block" key={index} href={contact.link}>
            <img className=" sm:w-28 w-14 mr-3" src={contact.icon}/>
            <p className="md:text-5xl text-xl text-center font-bold inline-block">
              {contact.username}
            </p>
          </a>
        ))}
      </div>
    </div>)
}

export default SectionWrapper(ContactMe, "contact")