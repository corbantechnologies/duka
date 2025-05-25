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
    return total + item.product.price * item.quantity;
  }, 0);

  return (
      <div className="mt-16 rounded-lg bg-slate-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
        <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
        <div className="mt-6 space-y-4 border-b pb-4 border-gray-200">
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-base font-medium text-gray-900">Order Subtotal</div>
            <Currency value={totalPrice} />
          </div>
        </div>
        {openCheckout && 
          <div>
            <Checkout onLoadingChange={handleLoadingChange}/>
            <Button variant='outline' disabled={isLoading} className="w-full" onClick={() => setOpenCheckout(false)}>Cancel</Button>
          </div>
        }
        {!openCheckout && 
          <Button
            disabled={items.length === 0}
            type='button'
            className="w-full mt-6 rounded-full"
            onClick={()=>setOpenCheckout(true)}
          >
            Check out
          </Button>
        }
      </div>
  );
};

export default Summary;
