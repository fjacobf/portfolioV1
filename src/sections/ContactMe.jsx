import React from "react";
import { SectionWrapper } from "../hoc";
import { contacts } from "../constants";
const ContactMe = () => {
  return (<div className="flex items-center justify-center flex-col h-screen p-10">
      <h1 className="text-6xl">My socials</h1>
      <div className="grid grid-cols-2 h-2/3 gap-10 md:grid-cols-4">
        {contacts.map((contact, index)=> (
          <a className="flex items-center" key={index} href={contact.link}>
            <img className="w-[200px]" src={contact.icon}/>
          </a>
        ))}
      </div>
    </div>)
}

export default SectionWrapper(ContactMe, "contact")