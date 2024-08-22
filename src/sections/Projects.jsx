import React from "react";
export function Projects({
  projects
}) {
  return <section id="projects" className='flex-col justify-between p-24'>
      <h1>Projects</h1>
      <div className="projects-trail w-full h-5/6 grid grid-flow-col gap-10 overflow-x-scroll no-scrollbar ">
        {projects.map((item, index) => <div key={index} className="project-card w-[500px] h-full rounded-xl bg-gray-400">
              <h2>{item.title}</h2>
            </div>)}
        
        
        
      </div>
    </section>;
}
  