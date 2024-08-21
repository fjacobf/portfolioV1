import {React, useRef, useEffect} from "react";
import react from "./assets/react.png";
export function AboutMe({ about, img1 }) {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);

  return <section id="about me" className='p-48'>
      <div className='flex flex-col w-1/2'>
        <h1>About Me</h1>
        <p>{about.presentation}</p>

        <div
         className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
                <img width="70" src={react} alt="React" />
            </li>
            {
              about.technologies.map( (item, index) => (
                <li key={index}>
                  <img width="70" src={`./assets/${item}.png`} alt={item} title={item} />
                </li>
              ))}
        </ul>             
        </div>
      </div>
      
      <img src={img1} alt="personal photo" className=' aspect-square w-[300px] rounded-full border-solid border-white border-4 object-cover object-top' />
    </section>;
}
  