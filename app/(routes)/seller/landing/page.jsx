'use client'; 

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import Features from "./Features";
import GetStarted from "./GetStarted";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

function SellerOnboarding() {
    const[active, setActive] = useState(false)

    const isActive = ()=>{
        window.scrollY > 10 ? setActive(true) : setActive(false)
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive);
        };
    },[])
  return (
    <main className='bg-[#f8f5f1] min-h-screen'>
        <nav className={`flex items-center z-50 justify-between px-4 lg:px-8 fixed left-0 right-0 transition-all duration-500 ${active ? 'h-20 bg-white shadow-sm' : 'h-24'}`}>
            <Link href='/seller/onboarding' className="flex items-end">
            <span className="font-bold text-3xl leading-none text-black">Duka</span>
            <Image src='/logo.svg' alt='logo' width={30} height={30} />
            </Link>
            <button className='bg-[#0073e6]  text-white rounded-md px-8 py-3'>Create store</button>
        </nav>
        <Hero/>
       <GetStarted/>
        <Features/>
        <Testimonials/>

    </main>
  )
}

export default SellerOnboarding