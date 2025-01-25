"use client";

import { Marquee3D } from "@/components/custom/marquee";
import Image from "next/image";

function Hero() {
  return (
    <div className="pt-28 md:pt-20 min-h-screen px-4 lg:px-8 grid items-center gap-5 grid-cols-1 md:grid-cols-2 place-content-center overflow-hidden">
      <div className="max-w-screen-sm mt-5 md:mt-0">
        <p className="md:font-semibold text-sm md:text-base text-center md:text-left text-gray-600">
          Get Started Fast, Easily and Affordably.
        </p>
        <h1 className="text-center md:text-left text-4xl lg:text-5xl font-bold my-3 md:my-4 ">
          Create Your Dream <br /> Online Store
        </h1>
        <p className="md:font-semibold text-center md:text-left text-gray-600 md:text-lg">
          Whether you&apos;re just getting started, or want to expand your
          market reach, our platform helps your business grow.
        </p>
        <div className="flex flex-col md:flex-row gap-5 items-center mt-8">
          <button className="bg-[#0073e6] text-white rounded-md px-8 py-3">
            Get started
          </button>
          <p className="underline text-sm underline-offset-2 ">
            Explore Features
          </p>
        </div>
        <div className="my-10 md:hidden">
         <div className="flex gap-1 justify-center md:justify-start items-center">
                    <Image src='/logo.svg' alt='logo' width={30} height={30} />
            <p className="text-xs font-semibold">JOIN OUR COMMUNITY</p>
                </div>
          <h2 className="text-2xl text-center font-semibold mb-5">Loved by buyers, trusted by sellers everywhere</h2>
        <div className="flex justify-center">
          <img src="/Tony2.jpg" alt="user" className="size-9 rounded-full border-2 border-white -ml-2" />
          <img src="/react2.jpg" alt="user" className="size-9 rounded-full border-2 border-white -ml-2" />
          <img src="/Sister3.jpg" alt="user" className="size-9 rounded-full border-2 border-white -ml-2" />
          <img src="/react4.jpg" alt="user" className="size-9 rounded-full border-2 border-white -ml-2" />
          <img src="/Tony2.jpg" alt="user" className="size-9 rounded-full border-2 border-white -ml-2" />
          <img src="/react2.jpg" alt="user" className="size-9 rounded-full border-2 border-white -ml-2" />
          <span className="size-9 rounded-full bg-slate-100 grid place-content-center text-[9px] border-2 border-white -ml-2">1000+</span>
        </div>
        </div>
          <div className="flex flex-col md:flex-row items-center md:justify-around mt-4 md:mt-8 mb-8 gap-5">
            <span className="flex flex-col items-center gap-2 p-4 rounded-lg">
              <span className="text-3xl md:text-4xl font-semibold">3k+</span>
              <span className="md:text-lg font-semibold">Daily site traffic</span>
            </span>
            <span className="flex flex-col items-center gap-2 md:p-4 rounded-lg">
              <span className="text-3xl md:text-4xl font-semibold">Ksh 150k+</span>
              <span className="md:text-lg font-semibold">Daily site sales</span>
            </span>
            <span className="flex flex-col items-center gap-2 md:p-4 rounded-lg">
              <span className="text-3xl md:text-4xl font-semibold">100+</span>
              <span className="md:text-lg font-semibold">Seller Stores</span>
            </span>
          </div>
      </div>
      <div className=" grid grid-cols-[repeat(4,_minmax(75px,_auto))] grid-rows-[repeat(4,_minmax(75px,_120px))] gap-1">
        <div className="col-span-2">
          <Image
            src="/accessories.jpg"
            alt="accessories"
            width={300}
            height={300}
            className="object-cover w-full h-full rounded-lg rounded-tl-full"
          />
        </div>
        <div className="col-span-2 row-span-2">
          <Image
            src="/sofa.jpg"
            alt="chair"
            width={300}
            height={300}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="col-span-2 row-span-3">
          <Image
            src="/fashion.jpg"
            alt="girl posing for a photo"
            width={400}
            height={500}
            className="object-cover h-full w-full rounded-lg"
          />
        </div>
        <div className="col-start-3 col-span-2">
          <Image
            src="/gadgets.jpg"
            alt="gadgets"
            width={300}
            height={300}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="col-span-2">
          <Image
            src="/shoes.jpg"
            alt="girl posing for a photo"
            width={300}
            height={300}
            className="object-cover h-full w-full rounded-lg rounded-br-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
