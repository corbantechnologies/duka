'use client';

import FollowBtn from "@/components/custom/FollowBtn";
import NewProductList from "@/components/custom/NewProductList";
import { useGetSingleShopPublic } from "@/lib/react-query/queriesAndMutations";
import { Heart, Mail, MapPin, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const storeCategories = [
    "Men's Clothing",
    "Women's Clothing",
    "Kids' Clothing",
    "Hoodies",
    "Sweat pants"
]

  const stars = Array(5).fill("⭐");
function Shop() {
  const {shopId} = useParams()
  const {data, isPending} = useGetSingleShopPublic(shopId)
    const router = useRouter()
    const [collection, setCollection] = useState('All')
    const handleCart = (e) => {
      alert("Cart clicked");
      e.stopPropagation();
    };
  return (
    <main className="md:px-4 lg:px-8 md:my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:h-[450px] md:gap-5">
        <div className="w-full md:rounded-lg overflow-hidden h-[250px] md:h-full">
            <Image src={data?.cover ? data?.cover : '/sofa.webp'} alt="shop banner" width={500} height={500} className="w-full h-full object-cover" />
        </div>
        <div className="md:bg-slate-100 p-4 md:p-6 space-y-3 md:space-y-5 place-content-center rounded-lg text-black">
            <h1 className="text-2xl lg:text-3xl font-semibold ">{data?.name}</h1>
            <p className="md:text-lg">{data?.description}</p>
            <div className="flex flex-wrap pb-3 md:pb-0 sm:items-center gap-3 md:gap-5 ">
                <span className="text-sm flex gap-1 items-center ">4.8 <span>⭐</span> </span>
                <span className="text-sm">Language: {data?.language}</span>
                <span className="text-sm">Currency: {data?.currency}</span>
                <span className="text-sm flex gap-1 items-center "><MapPin size={16}/> {data?.country}</span>
            </div>
            <FollowBtn shopId={data?.duka_id} shopName={data?.name}/>
                <div className="flex items-center gap-3 pt-3 md:pt-0">
            <Image src="/cartLogo.png" alt="owner" width={70} height={70} className="rounded-lg" />
            <div>
                <p>{data?.user}</p>
                <a href={`mailto:${data?.user}`} className="flex items-center gap-1"><Mail size={16}/>Email</a>
            </div>
          </div>
        </div>
        </div>
        <section className='px-4 mt-8 md:px-0'>
            <h2 className="font-semibold mb-3 text-lg lg:text-xl">Products</h2>
            <ul className="flex flex-wrap mb-3 gap-3">
            <li className={`${collection === 'All' ? 'bg-primary text-white' : 'bg-transparent'} transition-colors duration-300 hover:bg-primary hover:text-white text-sm rounded-full px-3 py-1`}>
                        <button onClick={()=>setCollection('All')} type='button'>
                        All
                        </button>
                    </li>
                {storeCategories.map((category)=>(
                    <li key={category} className={`${collection === category ? 'bg-primary text-white' : 'bg-transparent'} transition-colors duration-300 hover:bg-primary hover:text-white text-sm rounded-full px-3 py-1`}>
                        <button onClick={()=>setCollection(category)} type='button'>
                        {category}
                        </button>
                    </li>
                ))}
            </ul>
            <NewProductList products={data?.products} />
            
            <div className="flex mt-8 justify-center">
            <button className="bg-slate-100 transition-colors duration-300 hover:bg-primary hover:text-white px-3 py-1 rounded-md">View more products</button>
            </div>
        </section>
        <section className="my-8 px-4 md:px-0">
        <h2 className="font-semibold mb-3 text-lg lg:text-xl">Shop Reviews</h2>
        <ul className="space-y-3 md:max-w-screen-md">
              {Array.from({ length: 5 }, (_, index) => (
                <li key={index} className="space-y-2 border-b pb-5">
                  <span>
                    {stars.map((star, index) => (
                      <span key={index}>{star}</span>
                    ))}
                  </span>
                  <p className="">
                    Great product. Quality is amazing as described, and it arrived in
                    a timely manner
                    Great product. Quality is amazing as described, and it arrived in
                    a timely manner
                  </p>
                  <p className="text-gray-700">Tony Ligogo Jan 27, 2025</p>
                </li>
              ))}
            </ul>
            <div className="flex mt-8 justify-center">
            <button className="bg-slate-100 transition-colors duration-300 hover:bg-primary hover:text-white px-3 py-1 rounded-md">Read more reviews</button>
            </div>
        </section>
    </main>
  )
}

export default Shop