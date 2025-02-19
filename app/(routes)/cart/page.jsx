'use client';

import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl">
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Shopping Cart
          </h1>
          <div className="mt-8 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="mt-2 text-sm text-gray-500">
                  You have no items added to your cart.
                </p>
              )}
              <ul>
                {cart.items.map((item) => {
                  if (!item.product || !item.product.id) {
                    console.error('Cart item has an undefined product:', item);
                    return null;
                  }

                  return <CartItem key={item.product.id} data={item} />;
                })}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
    </div>
  );
};

export default CartPage;
