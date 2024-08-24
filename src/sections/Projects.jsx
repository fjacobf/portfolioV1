import React from "react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
const Projects =() => {
  return (
    <div className='flex-col justify-center items-center p-24 h-screen w-screen'>
      <h1 className="text-center mb-10">Projects</h1>
      <div className="flex flex-col">
        {projects.map((item, index) => <div key={index} className="project-card w-[50px] rounded-xl bg-gray-400">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>)}
        
        
        
      </div>
    </div>
    )
}

export default SectionWrapper(Projects, "projects")