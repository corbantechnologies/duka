'use client';

import Currency from "@/components/custom/currency";
import useWishlist from "@/hooks/use-wishlist";
import { X } from "lucide-react";

const WishlistItem= ({ data }) => {
  const wishlist = useWishlist();
  const onRemove = () => {
    wishlist.removeItem(data.id);
  };

  return (
    <div className="rounded-lg p-4">
      <div className="relative">
        <img
          src={data?.img}
          alt="item"
          width={300}
          height={200}
          className="object-cover object-center rounded-lg"
        />
        <button
          type="button"
          className="absolute bg-white top-2 right-2  rounded-full shadow p-1"
          onClick={onRemove}
        >
          <X size={16} />
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-lg">{data.title}</h2>
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default WishlistItem;
