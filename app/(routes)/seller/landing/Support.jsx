'use client';

import { Clock1, Hourglass, UserRoundCheck } from "lucide-react";
import Image from "next/image";

function Support() {
  return (
    <div className="px-4 lg:px-8 py-10 lg:py-16">
        <div className="max-w-screen-lg mx-auto">
      <div className="flex gap-1 justify-center items-center">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <p className="text-xs font-semibold">WE&apos;RE JUST WHAT YOU NEED</p>
      </div>
      <h1 className="text-xl mb-3 md:text-4xl text-center font-bold">Supporting your growth every step of the way</h1>
      <p className="text-[17px] md:text-xl text-center">Get the support you need, anytime you need it from a human with 24/7 real-time chat. Our professional support team has your back every step of the way.</p>
      <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-8 mt-8">
        <div className="flex gap-2 items-center ">
            <span className="bg-primary text-white rounded-md size-12 grid place-content-center"><Clock1 /></span>
            <span className="text-xl">24/7 Live Chat Support</span>
        </div>
        <div className="flex gap-2 items-center ">
            <span className="bg-primary text-white rounded-md size-12 grid place-content-center"><Hourglass /></span>
            <span className="text-xl">1h average response time</span>
        </div>
        <div className="flex gap-2 items-center ">
            <span className="bg-primary text-white rounded-md size-12 grid place-content-center"><UserRoundCheck /></span>
            <span className="text-xl">Professional support team</span>
        </div>
      </div>
      <div className="flex justify-center mt-8">

      <button className="bg-[#0073e6] text-white rounded-md px-8 py-3">
            Get started
          </button>
      </div>
        </div>
    </div>
  );
}

export default Support;
