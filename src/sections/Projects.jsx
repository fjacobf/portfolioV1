import React from "react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
const Projects =() => {
  return (
    <div className='flex-col justify-center items-center p-24 h-screen w-screen'>
      <h1 className="text-center">Projects</h1>
      <div className="projects-trail w-full h-5/6 grid grid-flow-col gap-10 overflow-x-scroll no-scrollbar ">
        {projects.map((item, index) => <div key={index} className="project-card w-[500px] h-full rounded-xl bg-gray-400">
              <h2>{item.title}</h2>
            </div>)}
        
        
        
      </div>
    </div>
    )
}

export default SectionWrapper(Projects, "projects")