'use client';

import useCart from "@/hooks/use-cart";
import { Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Currency from "./currency";
import useWishlist from "@/hooks/use-wishlist";
import { useEffect, useState } from "react";

function NewProduct({product}) {
const cart = useCart();
const wishlist = useWishlist();
  const [isWishlisted, setIsWishlisted] = useState(false);
  useEffect(() => {
    const existingItem = wishlist.items.find((item) => item.id === product.id);
    if (existingItem) {
      setIsWishlisted(true);
    }
  }, [wishlist.items, product.id]);

  const toggleWishlist = () => {
    if (isWishlisted) {
      wishlist.removeItem(product.id);
    } else {
      wishlist.addItem(product);
    }
    setIsWishlisted(!isWishlisted);
  };
  const handleCart = () => {
    const quantity = 1
    cart.addItem(product, quantity); 
  };
  return (
    <div className="relative snap-start flex-shrink-0 w-[150px] sm:w-[160px] md:w-[170px] lg:w-[180px]">
            <Link href={`/listing/${product.reference}`} key={product.id} className='relative'>
              <div className="rounded-lg border overflow-hidden">
                <img className="rounded-lg h-44 w-full object-contain mb-1" alt="product image" src={product.images[0].image} />
              </div>
                <p>{product.name}</p>
                <Currency value={product.price} />
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
                <Link href={`/listing/${product.id}`}>
                    Buy now
                </Link>
                  </button>
            </div>
  )
}

export default NewProduct