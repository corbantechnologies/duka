"use client";

import Image from "next/image";
import { Heart, Loader2 } from "lucide-react";
import { useGetShops } from "@/lib/react-query/queriesAndMutations";
import NewProductList from "./NewProductList";
import Link from "next/link";

function MoreShops() {
    const { data, isPending} = useGetShops()
    const filteredData =!isPending && data ? data?.filter(item => item?.products && item.products.length > 0) : [];
    if(isPending){
        return <Loader2 className='animate-spin'/>
    }
  return (
    <div className="px-4 lg:px-8">
      <h1 className="text-2xl lg:text-3xl mb-8 font-semibold">
        More shops
      </h1>
      {data.length > 0 ?
       filteredData?.map((shop) => (
        <div key={shop.id} className="mb-10 space-y-4">
          <div className="flex gap-3 justify-between md:items-center ">
            <div className="flex items-center gap-2">
              <Image
                src={shop?.cover ? shop?.cover : '/cartLogo.png'}
                width={60}
                height={60}
                alt="shop banner"
                className="rounded-md size-[50px] lg:size-[60px] object-cover"
              />
              <div className="flex flex-col gap-1">
                <Link href={`/shop/${shop.duka_id}`} className="text-xl font-semibold">
                    {shop?.name}
                </Link>
                <span className="text-sm">4.2 ⭐</span>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
              <button className="md:border-2 text-sm md:text-base border-gray-900 transition-all duration-300 md:hover:bg-primary md:hover:text-white hover:border-transparent py-1 px-3 gap-2 rounded-full flex items-center">
                <Heart size={18} /> <span className="hidden md:inline-flex">Follow</span>
              </button>
            </div>
          </div>
          <NewProductList products={shop?.products} />
        </div>
      ))
      :
      null
    }
    </div>
  );
}

export default MoreShops;
