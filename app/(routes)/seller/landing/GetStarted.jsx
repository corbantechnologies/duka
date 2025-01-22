'use client';

import { ChartNoAxesCombined, ShoppingBag, SquareChartGantt, UserRound } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  {
      step: "Signup",
      description: "Sign up for a free account in just a few minutes. Provide your email and create a password to get started.",
      image:'/account.png',
      icon:<UserRound />
  },
  {
      step: "Create Store",
      description: "Enter essential information about your store, including your business name, product categories, and payment details.",
      image:'/store.jpg',
      icon:<ShoppingBag />
  },
  {
      step: "Choose Store Design",
      description: "Select from a variety of customizable templates to design your store. Tailor the look and feel to match your brand identity.",
      image:'/templates.webp',
      icon:<SquareChartGantt />
  },
  {
      step: "Start Selling",
      description: "Launch your store and start selling your products online. Promote your store through social media and marketing tools to attract customers.",
      image:'/marquee3.png',
      icon:<ChartNoAxesCombined />
  }
]

function GetStarted() {
  const [selectedCategory, setSelectedCategory] = useState(steps[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % steps.length; 
                setSelectedCategory(steps[nextIndex]);
                return nextIndex;
            });
        }, 30000);

        return () => clearInterval(interval); 
    }, []);
    const handleSelect = (step) => {
        const index = steps.findIndex((item) => item.title === step.title);
        setSelectedCategory(step);
        setCurrentIndex(index);
    };
  return (
    <div className="px-4 lg:px-8 bg-white py-16">
        <div className="flex gap-1 justify-center md:justify-start items-center">
            <Image src='/logo.svg' alt='logo' width={30} height={30} />
    <p className="text-xs font-semibold">E-COMMERCE MADE EASY</p>
        </div>
    <h2 className="text-2xl mt-3 text-center md:text-left md:text-4xl font-semibold">Get up and running in no time</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
      <div className="flex gap-2 w-full overflow-auto pb-5 md:flex-col md:justify-center">
              {steps.map((cat)=>(
                  <article key={cat.step} onClick={() => handleSelect(cat)} className={`text-sm min-w-[300px]  border ${selectedCategory.step === cat.step ? 'border-blue-100 bg-blue-50':'border-transparent'} rounded-lg px-4 py-2`}>
                      <p className="text-lg font-semibold mb-1 flex items-center gap-2"> <span className="text-[#0073e6]">{cat.icon}</span> {cat.step}</p>
                      <p className="text-gray-700 flex items-center gap-1">{cat.description}</p>
                  </article>
              ))}
          </div>
          <div className="rounded-xl overflow-hidden h-[250px] md:h-[400px]">
                <Image src={selectedCategory.image} alt='user' width={500} height={500} className="object-cover w-full h-full"/>
            </div>
    </div>
</div>
  )
}

export default GetStarted