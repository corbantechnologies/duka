'use client';

import { MoveRight } from "lucide-react";
import Image from "next/image"

const features = [
    {
        "feature": "Beautiful storefront",
        "description": "Choose from a variety of beautiful storefronts, or get a fully customized storefront to match your brand.",
        "image" : '/accessories.jpg'
    },
    {
        "feature": "Payment Integration",
        "description": "Get paid directly to your MPESA and bank accounts.",
        "image" : '/sofa.jpg'
    },
    {
        "feature": "Inventory Management",
        "description": "Effortlessly manage your products, track stock levels, and receive analytics on product perfomance.",
        "image":"/gadgets.jpg"
    },
    {
        "feature": "Analytics Dashboard",
        "description": "Access real-time analytics to track sales, customer behavior, and store performance at a glance.",
        "image":"/shoes.jpg"
    },
    {
        "feature": "Customer Support",
        "description": "Access 24/7 customer support through chat, email, or phone to assist you with any questions or issues.",
        "image":"/sofa.jpg"
    }
]

function Features() {
  return (
    <div className="px-4 lg:px-8 bg-white py-10 ">
        <div className="flex gap-1 justify-center items-center">
                    <Image src='/cartLogo.png' alt='logo' width={20} height={20} />
            <p className="text-xs font-semibold">FEATURES</p>
                </div>
            <h2 className="text-3xl text-center md:text-4xl font-semibold">Explore the awesome <br className="md:hidden" /> features you get</h2>
            <p className="mt-8 text-center max-w-screen-lg mx-auto text-[17px]">Duka is committed to providing the most efficient and advanced features in the e-commerce space.  We are constantly listening to our user's feedback to improve our platform and offer new features to our community!</p>
            <div className="flex flex-col gap-5 mt-8 w-full overflow-auto md:py-5 max-w-screen-lg mx-auto">
                {features.map((feature,index)=>(
                    <article key={index} className="grid grid-cols-1 md:grid-cols-2 group gap-5 mb-5 md:mb-16 rounded-xl flex-shrink-0 ">
                        <div className="md:group-even:col-start-2 md:row-start-1">
                        <h3 className="text-2xl md:text-4xl font-semibold">{feature.feature}</h3>
                        <p className="text-[17px] my-2 md:my-4">{feature.description}</p>
                        <span className="flex items-center gap-2 text-primary underline text-[17px]">Get started <MoveRight size={16} /></span>
                        </div>
                        <div className="max-w-[400px] h-[200px] md:group-even:col-start-1 overflow-hidden">
                        <Image src={feature.image} alt={feature.feature} width={400} height={200} className="rounded-lg w-full h-full object-cover" />
                        </div>
                    </article>
                ))}
            </div>
        </div>
  )
}

export default Features