'use client';

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
function ProductList({wrap}) {
  return (
    <div className={`flex flex-wrap gap-5 mt-3 w-full no-scrollbar overflow-auto`}>
        {recents.map((recent)=>(
            <Link href='/listing/0912409563' key={recent.img} className={`flex-shrink-0 max-w-[150px] md:max-w-[180px] lg:w-[200px]`}>
              <div>
                <img className="rounded-lg object-cover mb-1" alt="images of recent views" src={recent.img} />
                <p className='text-lg'>{recent.title}</p>
                <p className='font-semibold' >{recent.price}</p>
                <p className="line-through text-gray-700 text-sm">{recent.dummy}</p>
              </div>
            </Link>
        ))}
        </div>
  )
}

export default ProductList