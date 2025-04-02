"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import MainNavbar from "./MainNavbar";
import { MarqueeDemo } from "./marquee";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <div className=" flex flex-col">
      <MainNavbar />
      <div className="pt-[70px] relative">
        <div>
          <h1 className="md:hidden font-bold text-center text-3xl mt-5 md:mt-0 md:text-4xl">Explore, Shop & Sell</h1>
          <div className='md:hidden px-4 mt-3 mb-3 flex items-center'>
            <Input type='search' placeholder='Shoes' className='rounded-full placeholder:text-gray-500' />
            <Search size={18} className="absolute right-6"/>
          </div>
          <div className="md:hidden mb-5 flex gap-1 items-center justify-center">
          <p className="text-gray-500 text-sm">Level up your sales on </p>
          <Link href='/seller/landing'>
            <Image src="/logo.jpg" alt="logo" width={60} height={30} />
          </Link>
          </div>
        </div>
        <MarqueeDemo />
      </div>
    </div>
  );
}

export default Hero;
