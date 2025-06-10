'use client';

import Currency from "@/components/custom/currency";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useState } from "react";
import Checkout from "./checkout";

const Summary = () => {
  const items = useCart((state) => state.items);
  const [openCheckout, setOpenCheckout] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingChange = (loading) => {
      setIsLoading(loading);
  };
  const totalPrice = items.reduce((total, item) => {
    return total + (item.product.discount ? item.product.discounted_price : item.product.price) * item.quantity;
  }, 0);

  return (
      <div className="mt-16 rounded-lg bg-[#f5f5f5] px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
        <h2 className="text-lg font-semibold">Order Summary</h2>
        <div className="mt-6 space-y-4 border-b pb-4 border-gray-200">
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-base font-semibold">Order Subtotal</div>
            <Currency value={totalPrice} />
          </div>
        </div>
        {openCheckout && 
          <div className="flex flex-col gap-2">
            <Checkout onLoadingChange={handleLoadingChange}/>
            <Button variant='outline' disabled={isLoading} className="w-full bg-transparent" onClick={() => setOpenCheckout(false)}>Cancel</Button>
          </div>
        }
        {!openCheckout && 
          <Button
            disabled={items.length === 0}
            type='button'
            className="w-full mt-5"
            onClick={()=>setOpenCheckout(true)}
          >
           Proceed to checkout
          </Button>
        }
      </div>
  );
};

export default Summary;
