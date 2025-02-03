'use client';

import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

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
    },
  ];
function ProductList() {

  const handleCart = (e) => {
    alert("Cart clicked");
    e.stopPropagation();
  };
  return (
    <div className={`flex gap-3 lg:gap-5 mt-3 w-full no-scrollbar snap-x overflow-auto`}>
        {recents.map((recent)=>(
          <div key={recent.img} className="relative snap-start flex-shrink-0 max-w-[150px] lg:max-w-[200px]">
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
            <button className="border border-gray-300 text-gray-700 transition-all duration-300 hover:border-transparent hover:bg-primary hover:text-white mt-2 py-2 px-4 text-sm rounded-md grid place-content-center">
                    Buy now
                  </button>
            </div>
        ))}
        </div>
  )
}

export default ProductList