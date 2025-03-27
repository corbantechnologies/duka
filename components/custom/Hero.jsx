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
        <div className="md:grid md:absolute z-40 radial-bg top-0 bottom-0 left-0 right-0 place-content-center">
          <h1 className="md:hidden font-bold text-center text-3xl mt-8 md:mt-0 md:text-4xl">Explore, Shop & Sell</h1>
          <div className="hidden md:block">
          <h1 className="font-bold text-center text-3xl mt-8 md:mt-0 md:text-4xl">Explore, Shop & Sell amazing products on Duka</h1>
          </div>
          <div className='md:hidden px-4 mt-5 mb-3 flex items-center'>
            <Input type='search' placeholder='Shoes' className='rounded-full placeholder:text-gray-500' />
            <Search size={18} className="absolute right-6"/>
          </div>
          <div className="md:hidden mb-3 flex gap-1 items-center justify-center">
          <p className="text-gray-500 text-sm">Level up your sales on </p>
          <Link href='/seller/landing'>
            <Image src="/logo.jpg" alt="logo" width={40} height={15} />
          </Link>
          </div>
        </div>
        <MarqueeDemo />
      </div>
    </div>
  );
}

export default Hero;
