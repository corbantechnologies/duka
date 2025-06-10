'use client';

import Currency from "@/components/custom/currency";
import useCart from "@/hooks/use-cart";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


const CartItem = ({ data }) => {
  const cart = useCart();
  const [quantity, setQuantity] = useState(1);

  const onRemove = () => {
    cart.removeItem(data.product.id);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      cart.updateItemQuantity(data.product.id, newQuantity);
    }
  };

  if (!data?.product) {
    return null;
  }

  return (
    <li className="flex py-4 border-b lg:py-3">
      <div className="w-24 h-24 md:w-44 md:h-44 p-2 bg-[#f5f5f5] rounded-md overflow-hidden">
        <img
          src={data.product?.images[0]?.image}
          alt="product"
          className="object-contain h-full mx-auto object-center rounded-md"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <button type="button" className="rounded-full shadow-md bg-[#f5f5f5] p-2" onClick={onRemove}>
            <Trash size={18} />
          </button>
        </div>
        <div className="relative pr-9 sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
          </div>
            <p className="font-semibold text-lg">{data.product.name}</p>
          <p>KSH {data.product.discount ? data.product.discounted_price : data.product.price} x {quantity}</p>
          <h2 className="mt-2 font-semibold">Subtotal:</h2>
          <Currency value={(data.product.discount ? data.product.discounted_price : data.product.price) * quantity} />

          <div className="flex items-center space-x-4 mt-5 text-sm">
            <button
              onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}
              className="size-7 grid place-content-center bg-[#f5f5f5] rounded-full"
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="size-7 grid place-content-center bg-[#f5f5f5] rounded-full"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
