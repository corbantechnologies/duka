'use client';

import Link from "next/link";
import ProductList from "./ProductList";
import { Heart } from "lucide-react";
import Image from "next/image";

const sellers = [
    '/gadgets.jpg',
    '/footwear.jpg',
    '/decor.jpg',
    '/chair.jpg',
]

function ProductSuggestions() {
  return (
    <div>
        <h1 className="text-2xl lg:text-3xl mb-8 font-semibold">Related to FancyMen</h1>
        {Array.from({length:2}, (_,index)=>(
            <div key={index} className="mb-10 space-y-4">
                <div className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                <Image src={sellers[index]} width={60} height={60} alt='shop banner' className="rounded size-[50px] lg:size-[60px] object-cover"/>
                <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold">{`Related Seller ${index + 1}`}</h2>
                <span className="text-sm">4.2 ⭐</span>
                </div>
                </div>
                <div className="flex items-center gap-5">
                <button className="border-2 border-gray-900 transition-all duration-300 hover:bg-primary hover:text-white hover:border-transparent py-1 px-3 gap-2 rounded-full flex items-center">
                    <Heart size={18}/> Follow
                </button>
                <Link href='#' className="underline text-sm">View more</Link>
            </div>
                </div>
                
                <ProductList/>
            </div>
        ))}
    </div>
  )
}

export default ProductSuggestions