"use client";

import Image from "next/image";
import ProductList from "./ProductList";
import { Heart } from "lucide-react";

const products = ["/gadgets.jpg", "/footwear.jpg", "/decor.jpg", "/chair.jpg"];

function FeaturedSellers() {
  return (
    <div className="px-4 lg:px-8">
      <h1 className="text-2xl lg:text-3xl mb-8 font-semibold">
        Discover our Top Sellers
      </h1>
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className="mb-10 space-y-4">
          <div className="flex gap-3 justify-between md:items-center ">
            <div className="flex items-center gap-2">
              <Image
                src={products[index]}
                width={60}
                height={60}
                alt="shop banner"
                className="rounded size-[50px] lg:size-[60px] object-cover"
              />
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-semibold">{`Top Seller ${
                  index + 1
                }`}</h2>
                <span className="text-sm">4.2 ⭐</span>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
              <button className="md:border-2 text-sm md:text-base border-gray-900 transition-all duration-300 md:hover:bg-primary md:hover:text-white hover:border-transparent py-1 px-3 gap-2 rounded-full flex items-center">
                <Heart size={18} /> <span className="hidden md:inline-flex">Follow</span>
              </button>
            </div>
          </div>
          <ProductList />
        </div>
      ))}
    </div>
  );
}

export default FeaturedSellers;
