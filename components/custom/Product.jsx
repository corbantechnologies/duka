'use client';

import useCart from "@/hooks/use-cart";
import { Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Currency from "./currency";
import useWishlist from "@/hooks/use-wishlist";
import { useEffect, useState } from "react";

function Product({recent}) {
const cart = useCart();
const wishlist = useWishlist();
  const [isWishlisted, setIsWishlisted] = useState(false);
  useEffect(() => {
    const existingItem = wishlist.items.find((item) => item.id === recent.id);
    if (existingItem) {
      setIsWishlisted(true);
    }
  }, [wishlist.items, recent.id]);

  const toggleWishlist = () => {
    if (isWishlisted) {
      wishlist.removeItem(recent.id);
    } else {
      wishlist.addItem(recent);
    }
    setIsWishlisted(!isWishlisted);
  };
  const handleCart = () => {
    const quantity = 1
    cart.addItem(recent, quantity); 
  };
  return (
    <div key={recent.id} className="relative snap-start flex-shrink-0 max-w-[150px] lg:max-w-[180px]">
            <Link href='/listing/0912409563' key={recent.id} className='relative'>
              <div>
                <img className="rounded-lg object-cover mb-1" alt="images of recent views" src={recent.img} />
                <p>{recent.title}</p>
                <Currency value={recent.price} />
                <p className="line-through text-gray-700 text-sm">{recent.dummy}</p>
              </div>
            </Link>
                <div className="absolute top-1 left-1 space-y-2">
                  <button onClick={handleCart} className="bg-white transition-all duration-300 hover:bg-primary hover:text-white shadow size-7 lg:size-8 rounded-full grid place-content-center">
                    <ShoppingCart size={15}/>
                  </button>
                  <button onClick={toggleWishlist} className="bg-white transition-all duration-300 hover:bg-primary hover:text-white shadow size-7 lg:size-8 rounded-full grid place-content-center">
                    <Heart fill={isWishlisted ? "red" : "none"} size={15} className={`${isWishlisted ? 'text-red-500':''}`}/>
                  </button>
                </div>
            <button className="border border-primary bg-blue-50 text-primary transition-all duration-300 hover:border-transparent hover:bg-primary hover:text-white mt-2 py-2 px-4 text-sm rounded-md grid place-content-center">
                <Link href='/listing/0912409563'>
                    Buy now
                </Link>
                  </button>
            </div>
  )
}

export default Product