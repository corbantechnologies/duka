'use client';

import MainNavbar from "./MainNavbar";
import { MarqueeDemo } from "./marquee"

function Hero() {
  return (
    <div>
        <MainNavbar/>
        <div className="pt-[70px] relative">
            <div className="absolute z-40 radial-bg top-0 bottom-0 left-0 right-0 grid place-content-center">
            <h1 className='text-primary font-bold text-4xl'>Duka</h1>
            </div>
        <MarqueeDemo/>
        </div>
    </div>
  )
}

export default Hero