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
import useCart from "@/hooks/use-cart";
import useWishlist from "@/hooks/use-wishlist";
import { useEffect, useState } from "react";

 function Listing() {
  const {listingId} = useParams()
  const {
    data: product,
    isPending: productFetchPending,
  } = useGetSingleProductDetails(listingId)
  const cart = useCart();
const wishlist = useWishlist();
const [isWishlisted, setIsWishlisted] = useState(false);
  useEffect(() => {
    const existingItem = wishlist.items.find((item) => item.id === product?.id);
    if (existingItem) {
      setIsWishlisted(true);
    }
  }, [wishlist.items, product?.id]);
  const toggleWishlist = () => {
    if (isWishlisted) {
      wishlist.removeItem(product?.id);
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
    <div className="px-4 lg:px-8">
      <section className="flex flex-col md:flex-row pt-5 lg:h-[calc(100vh-70px)]">
        <section className="flex-[2] grid md:block place-content-center relative">
          <ProductCarousel images={product?.images} />
          <button onClick={toggleWishlist} className="absolute right-10 top-0 bg-primary grid place-content-center size-7 lg:size-8 rounded-full duration-300 text-white ">
                    <Heart fill={isWishlisted ? "red" : "none"} size={15} className={`${isWishlisted ? 'text-red-500':''}`}/>
                  </button>
        </section>
        <section className="flex-1 lg:h-[80vh] overflow-y-auto py-10 lg:py-0 md:px-1 lg:px-5">
          <OrderForm product={product} onAddToCart={handleCart} />
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
