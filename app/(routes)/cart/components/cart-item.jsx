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
      <div className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-md overflow-hidden">
        <img
          src={data.product?.img}
          alt="product"
          className="object-cover object-center border rounded-md"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <button type="button" className="rounded-full shadow-md p-2" onClick={onRemove}>
            <Trash size={18} />
          </button>
        </div>
        <div className="relative pr-9 sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-md font-semibold text-lg sm:text">{data.product.name}</p>
          </div>
          <p className="text-md text-sm">KSH {data.product.price} x {quantity}</p>
          <h2 className="mt-2 text-md font-semibold text-sm">Subtotal:</h2>
          <Currency value={data.product.price * quantity} />

          <div className="flex items-center space-x-2 mt-2 text-sm">
            <button
              onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <p>{quantity}</p>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
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
