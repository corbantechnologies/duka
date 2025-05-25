'use client'
import MoreProducts from "@/components/custom/MoreProducts";
import OrderForm from "@/components/custom/OrderForm";
import { ProductCarousel } from "@/components/custom/ProductCarousel";
import ProductSuggestions from "@/components/custom/ProductSuggestions";
import ProductInfo from "@/components/custom/ProductInfo";
import Recents from "@/components/custom/Recents";
import { Heart } from "lucide-react";
import { useGetSingleProductDetails } from "@/lib/react-query/queriesAndMutations";
import { useParams } from "next/navigation";

 function Listing() {
  const {listingId} = useParams()
  const {
    data: product,
    isPending: productFetchPending,
  } = useGetSingleProductDetails(listingId)
  console.log(product)
  return (
    <div className="px-4 lg:px-8">
      <section className="flex flex-col md:flex-row pt-5 lg:h-[calc(100vh-70px)]">
        <section className="flex-[2] grid md:block place-content-center relative">
          <ProductCarousel images={product?.images} />
          <button className="size-10 rounded-full grid place-content-center bg-primary text-white absolute right-10 top-0">
            <Heart size={20} />
          </button>
        </section>
        <section className="flex-1 lg:h-[80vh] overflow-y-auto py-10 lg:py-0 md:px-1 lg:px-5">
          <OrderForm product={product} />
        </section>
      </section>
      <section className="space-y-10">
        <ProductInfo product={product}/>
        <MoreProducts shopId={product?.shop}/>
        <ProductSuggestions />
        <Recents />
      </section>
    </div>
  );
}

export default Listing;
