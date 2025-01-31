'use client';

import Image from "next/image"

const features = [
    {
        "feature": "Easy Setup",
        "description": "Get your online store up and running in just a few clicks, with no technical skills required."
    },
    {
        "feature": "Beautiful storefront",
        "description": "Choose from a variety of beautiful storefronts, or get a fully customized storefront to match your brand."
    },
    {
        "feature": "Payment Integration",
        "description": "Seamlessly integrate with MPESA and bank accounts to accept payments from customers."
    },
    {
        "feature": "Inventory Management",
        "description": "Effortlessly manage your products, track stock levels, and receive analytics on product perfomance."
    },
    {
        "feature": "Analytics Dashboard",
        "description": "Access real-time analytics to track sales, customer behavior, and store performance at a glance."
    },
    {
        "feature": "SEO Tools",
        "description": "Utilize built-in SEO features to optimize your store for search engines and increase visibility."
    },
    {
        "feature": "Marketing Integrations",
        "description": "Connect with popular marketing tools to run campaigns, manage email lists, and boost sales."
    },
    {
        "feature": "Customer Support",
        "description": "Access 24/7 customer support through chat, email, or phone to assist you with any questions or issues."
    }
]

function WhyUs() {
  return (
    <div className="px-4 lg:px-8 bg-white py-10 lg:py-16">
        <div className="flex gap-1 justify-center md:justify-start items-center">
                    <Image src='/cartLogo.png' alt='logo' width={20} height={20} />
            <p className="text-xs font-semibold">WHY BUILD WITH DUKA?</p>
                </div>
            <h2 className="text-2xl text-center md:text-left md:text-4xl font-semibold">An amazing experience <br className="md:hidden" /> for you</h2>
            <div className="flex flex-col md:flex-row gap-5 mt-3 lg:mt-8 w-full overflow-auto md:py-5">
                {features.map((feature,index)=>(
                    <article key={index} className="border-2 bg-[#fcfcfc] border-[#f4f4f4] p-5 md:p-10 rounded-xl flex-shrink-0 max-w-[350px]">
                        <span className="font-bold text-gray-800 text-2xl md:text-5xl underline ">0{index + 1}</span>
                        <h3 className="text-xl md:text-2xl font-semibold my-2 md:my-4">{feature.feature}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </article>
                ))}
            </div>
        </div>
  )
}

export default WhyUs