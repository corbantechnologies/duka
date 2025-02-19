'use client';

import { Heart, Mail, MapPin, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const store = {
    name: "Comfortt",
    description: "Discover stylish, trendy, and comfortable clothing for every demographic. From modern to classic, our curated collections cater to all tastes and occasions. Shop with us for high-quality fashion that makes you look and feel great—because comfortt is always in style!",
    starRatings: 4.8,
    location: "Kilimani, Nairobi",
    language: "English",
    currency: "KSH"
  };
const storeCategories = [
    "Men's Clothing",
    "Women's Clothing",
    "Kids' Clothing",
    "Hoodies",
    "Sweat pants"
]
const recents = [
    {
      title:"Bed & Pillows",
      img: "https://i.etsystatic.com/11651126/r/il/d76bf6/5753982272/il_600x600.5753982272_41ig.jpg",
      price:'KSH 1780',
      dummy:'KSH 1900'
    },
    {
      title:"Art pieces",
      img: "https://i.etsystatic.com/43790300/r/il/15e507/6401998736/il_600x600.6401998736_tv40.jpg",
      price:'KSH 800',
      dummy:'KSH 920'
    },
    {
      title:"Wearables",
      img: "https://i.etsystatic.com/ij/733dca/6586968809/ij_600x600.6586968809_q0zid5sd.jpg?version=0",
      price:'KSH 500',
      dummy:'KSH 620'
    },
    {
      title:"Gifts",
      img: "https://i.etsystatic.com/25304800/r/il/b9d4bd/6297597679/il_600x600.6297597679_bc6n.jpg",
      price:'KSH 780',
      dummy:'KSH 850'
    },
    {
      title:"Watches",
      img: "https://i.etsystatic.com/11118406/c/2048/2048/0/0/il/4e57ad/3571041628/il_600x600.3571041628_d0kp.jpg",
      price:'KSH 1500',
      dummy:'KSH 1700'
    }
  ];
  const stars = Array(5).fill("⭐");
function Shop() {
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
            <Image src='/sofa.webp' alt="shop banner" width={500} height={500} className="w-full h-full object-cover" />
        </div>
        <div className="md:bg-slate-100 p-4 md:p-6 space-y-3 md:space-y-5 place-content-center rounded-lg text-black">
            <h1 className="text-2xl lg:text-3xl font-semibold ">{store.name}</h1>
            <p className="md:text-lg">{store.description}</p>
            <div className="flex flex-wrap pb-3 md:pb-0 sm:items-center gap-3 md:gap-5 ">
                <span className="text-sm flex gap-1 items-center ">{store.starRatings} <span>⭐</span> </span>
                <span className="text-sm">Language: {store.language}</span>
                <span className="text-sm">Currency: {store.currency}</span>
                <span className="text-sm flex gap-1 items-center "><MapPin size={16}/> {store.location}</span>
            </div>
            <button className="border-2 border-gray-900 transition-all duration-300 hover:bg-primary hover:text-white hover:border-transparent py-1 px-3 gap-2 rounded-full flex items-center">
                    <Heart size={16}/> Follow shop
                </button>
                <div className="flex items-center gap-3 pt-3 md:pt-0">
            <Image src="/cartLogo.png" alt="owner" width={70} height={70} className="rounded-lg" />
            <div>
                <p>Tony Ligogo</p>
                <p className="flex items-center gap-1"><Mail size={16}/>Contact</p>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
            {recents.map((recent)=>(
                <div key={recent.img} className="relative snap-start">
                    <Link href='/listing/0912409563' key={recent.img} className='relative'>
                    <div>
                        <img className="rounded-lg object-cover mb-1" alt="images of recent views" src={recent.img} />
                        <p>{recent.title}</p>
                        <p className='font-semibold text-base' >{recent.price}</p>
                        <p className="line-through text-gray-700 text-sm">{recent.dummy}</p>
                    </div>
                    </Link>
                        <div className="absolute top-1 left-1 space-y-2">
                        <button onClick={handleCart} className="bg-white transition-all duration-300 hover:bg-primary hover:text-white shadow size-7 lg:size-8 rounded-full grid place-content-center">
                            <ShoppingCart size={15}/>
                        </button>
                        <button className="bg-white transition-all duration-300 hover:bg-primary hover:text-white shadow size-7 lg:size-8 rounded-full grid place-content-center">
                            <Heart size={15}/>
                        </button>
                        </div>
                    <button onClick={()=>router.push('/listing/0912409563')} className="border border-gray-300 text-gray-700 transition-all duration-300 hover:border-transparent hover:bg-primary hover:text-white mt-2 py-2 px-4 text-sm rounded-md grid place-content-center">
                            Buy now
                        </button>
                    </div>
                ))}
            </div>
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