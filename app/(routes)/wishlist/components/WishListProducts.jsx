"use client"

import Product from "@/components/custom/Product";
import { useSearchParams } from "next/navigation";
import WishlistItem from "./wishlist-item";

const WishListProducts = ({ title, items, allProducts }) => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-2xl">{title}</h3>
      {filteredItems.length === 0 && <p>No product found. Try adjusting your filters</p> }
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ${
          allProducts ? "lg:grid-cols-6" : "lg:grid-cols-5"
        } gap-5`}>
        {filteredItems.map((item) => (
          <Product key={item.id} recent={item} />
        //   <WishlistItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default WishListProducts;
