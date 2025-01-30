'use client';

import Image from "next/image";

const sellers = [
    '/gadgets.jpg',
    '/footwear.jpg',
    '/decor.jpg',
    '/chair.jpg',
]

function FeaturedSellers() {
  return (
    <div className="px-4 lg:px-8">
        <h1 className="text-2xl font-semibold">Discover our Top Sellers</h1>
        <div className="grid mt-3 grid-cols-1 gap-4 sm:grid-cols-2">
            {sellers.map((seller)=>(
                <div key={seller} className="h-[300px] overflow-hidden relative rounded-lg group">
                    <Image src={seller} width={400} height={300} alt='shop banner' className="object-cover transition-all duration-500 group-hover:scale-110 w-full h-full"/>
                    <ul className="absolute bottom-5 left-2 flex flex-wrap gap-2">
                        <li className="bg-white text-xs rounded-full py-1 px-4">Watches</li>
                        <li className="bg-white text-xs rounded-full py-1 px-4">Phones</li>
                        <li className="bg-white text-xs rounded-full py-1 px-4">Laptops</li>
                        <li className="bg-white text-xs rounded-full py-1 px-4">Cameras</li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturedSellers