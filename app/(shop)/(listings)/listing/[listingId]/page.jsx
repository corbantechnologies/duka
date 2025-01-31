"use client";

import MoreProducts from "@/components/custom/MoreProducts";
import OrderForm from "@/components/custom/OrderForm";
import { ProductCarousel } from "@/components/custom/ProductCarousel";
import ProductSuggestions from "@/components/custom/ProductSuggestions";
import Reviews from "@/components/custom/Reviews";
import Recents from "@/components/custom/Recents";
import { Heart } from "lucide-react";
import { use } from "react";

function Listing({ params }) {
  const { listingId } = use(params);
  return (
    <div className="px-4 lg:px-8">
      <section className="flex flex-col lg:flex-row pt-5 lg:h-[calc(100vh-70px)]">
        <section className="flex-[2] grid lg:block place-content-center relative">
          <ProductCarousel />
          <button className="size-10 rounded-full grid place-content-center bg-primary text-white absolute right-10 top-0">
            <Heart size={20} />
          </button>
        </section>
        <section className="flex-1 lg:h-[80vh] overflow-y-auto py-10 lg:py-0 md:px-1 lg:px-5">
          <OrderForm />
        </section>
      </section>
      <section className="space-y-10">
        <section className="md:flex gap-10">
          <div className="flex-1">
        <Reviews />
          </div>
          <div className="flex-1 mt-10 md:mt-0">
        <MoreProducts />
          </div>
        </section>
        <ProductSuggestions />
        <Recents />
      </section>
    </div>
  );
}

export default Listing;
