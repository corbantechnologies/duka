'use client';

import MainNavbar from "./MainNavbar";
import { MarqueeDemo } from "./marquee"

function Hero() {
  return (
    <div>
        <MainNavbar/>
        <div className="pt-[70px] relative">
            <div className="absolute z-40 radial-bg h-1/2 w-1/2 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 grid place-content-center">
            <h1 className='text-primary font-bold text-4xl'>Duka</h1>
            </div>
        <MarqueeDemo/>
        </div>
    </div>
  )
}

export default Hero