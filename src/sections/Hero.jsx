import React from "react";
import background from '../assets/background.jpg'
export function Hero({}) {
  return (
    <div id="home" className=' h-[100vh] flex justify-center flex-col items-center'>
      <img className="bgImage absolute h-[100vh] w-[100vw] object-cover object-top  -z-10 overflow-hidden" src={background} alt="background" />
      <h1 className='text-9xl font-extrabold'>Hi! I'm
        <span className='bg-[linear-gradient(to_right,theme(colors.amber.500),theme(colors.amber.300),theme(colors.violet.400),theme(colors.violet.500),theme(colors.violet.400),theme(colors.amber.300),theme(colors.amber.500))] animate-gradient bg-[length:200%_auto] bg-clip-text text-transparent'>Felipe!</span>
      </h1>
      <h2 className='text-7xl'>Developer</h2>
    </div>
    )
}
  