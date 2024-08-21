import {React, useRef, useEffect} from "react";
import css from './assets/css.png'
import html5 from './assets/html5.png'
import javascript from './assets/javascript.png'
import jquery from './assets/jquery.png'
import nodejs from './assets/nodejs.png'
import postgresql from './assets/postgresql.png'
import react from './assets/react.png'
import sass from './assets/sass.png'
import tailwind from './assets/tailwind.png'
export function Technologies({
}) {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);
  return <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul ref={logosRef} className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            <li>
                <img width="70" src={react} alt="React" title="React" />
            </li>
            <li>
                <img width="70" src={css} alt="css" title="css" />
            </li>
            <li>
                <img width="70" src={javascript} alt="Javascript" title="Javascript" />
            </li>
            <li>
                <img width="70" src={html5} alt="HTML5" title="HTML5" />
            </li>
            <li>
                <img width="70" src={nodejs} alt="NodeJS" title="NodeJS" />
            </li>
            <li>
                <img width="70" src={tailwind} alt="Tailwind" title="Tailwind" />
            </li>
            <li>
                <img width="70" src={postgresql} alt="PostgreSQL" title="PostgreSQL" />
            </li>
            <li>
                <img width="70" src={sass} alt="Sass" title="Sass" />
            </li>
            <li>
                <img width="70" src={jquery} alt="JQuery" title="JQuery" />
            </li>
            
        </ul>             
        </div>;
}
  