'use client';

import { Heart } from "lucide-react"
import Link from "next/link"
import { useGetSingleShopProducts } from "@/lib/react-query/queriesAndMutations"
import NewProductList from "./NewProductList";

function MoreProducts({shopId}) {
  const {
      data: shop,
    } = useGetSingleShopProducts(shopId)
  return (
    <div>
        <div className="flex flex-col gap-5 mb-5">
            <h1 className="text-2xl lg:text-3xl font-semibold">More from this shop</h1>
            <div className="flex items-center gap-5">
                <button className="border-2 border-gray-900 transition-all duration-300 hover:bg-primary hover:text-white hover:border-transparent py-1 px-3 gap-2 rounded-full flex items-center">
                    <Heart size={18}/> Follow
                </button>
                <Link href='#' className="underline text-sm">View more</Link>
            </div>
        </div>
        <NewProductList products={shop?.products} />
    </div>
  )
}

export default MoreProducts