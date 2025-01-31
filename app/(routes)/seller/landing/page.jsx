'use client'; 

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import Features from "./Features";
import GetStarted from "./GetStarted";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import { Menu } from "lucide-react";
import Categories from "./Categories";
import Support from "./Support";
import Footer from "@/components/custom/Footer";

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
            <Link href='/seller/landing'>
            <Image src='/logo2.png' alt='logo' width={100} height={80} />
            </Link>
            <Menu className="md:hidden" />
            <button className='bg-[#0073e6] hidden md:block text-white rounded-md px-8 py-3'>Create store</button>
        </nav>
        <Hero/>
       <GetStarted/>
       <Categories/>
        <Features/>
        <Support/>
        <Testimonials/>
        <Footer/>
    </main>
  )
}

export default SellerOnboarding