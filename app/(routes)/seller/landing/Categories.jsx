'use client';

import Image from "next/image";

const categories=[
    {
        "name":"Home & Decor",
        "image":"/decor.jpg"
    },
    {
        "name":"Clothing",
        "image":"/clothing.jpg"
    },
    {
        "name":"Shoes",
        "image":"/footwear.jpg"
    },
    {
        "name":"Gadgets",
        "image":"/tech.jpg"
    },
    {
        "name":"Beauty Products",
        "image":"/beauty.jpg"
    },
    {
        "name":"Art",
        "image":"/artwork.jpg"
    },
]

function Categories() {
  return (
    <div className="px-4 lg:px-8 py-10 lg:py-16">
            <div className="flex gap-1 justify-center md:justify-start items-center">
                        <Image src='/cartLogo.png' alt='logo' width={20} height={20} />
                <p className="text-xs font-semibold">WHAT CAN YOU SELL?</p>
                    </div>
                <h2 className="text-3xl text-center md:text-left md:text-4xl font-semibold">Get a store and sell <br className="md:hidden" /> anything, legal🫵 </h2>
                <div className="flex flex-row gap-5 mt-8 w-full overflow-auto md:py-5">
                        {categories.map((cat)=>(
                            <article key={cat.name} className="rounded-md overflow-hidden relative flex-shrink-0 max-w-[350px]">
                            <Image src={cat.image} alt={cat.name} width={250} height={500} className='object-cover w-full h-full'/>
                        <h3 className="absolute bottom-0 bg-black/30 backdrop-blur-sm px-4 text-[15px] left-1/2 -translate-x-1/2 py-1 rounded-sm text-white my-2 md:my-4">{cat.name}</h3>
                    </article>
                        ))}
                            <article className="rounded-md bg-primary w-[330px] overflow-hidden grid place-content-center flex-shrink-0 max-w-[350px]">
                            <div className="flex flex-col gap-1 justify-center items-center">
                        <Image src='/cartLogo.png' alt='logo' width={150} height={150} />
                <p className="text-2xl text-center text-white">Build your online business <br /> with DUKA TODAY</p>
                        <button className="bg-white px-4 animate-bounce py-2 rounded-sm my-2 md:my-4">Get started now</button>
                    </div>
                    </article>
                </div>
            </div>
  )
}

export default Categories