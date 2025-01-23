'use client';

import Image from "next/image";

const testimonials = [
    {
        name: "Emma",
        title:'Transformative Experience',
        testimonial: "Duka has transformed the way I run my online store! The setup was incredibly easy, and I was able to start selling within hours. Their team created a beautiful, personalized storefront that truly represents my brand. Highly recommend!"
    },
    {
        name: "Michael Ochieng",
        title: "Simplicity at Its Best",
        testimonial: "As a small business owner, I was overwhelmed by the thought of setting up an online store. Duka made it so simple! The inventory management features are a game-changer, and the customer support is top-notch. I couldn't be happier with my decision to use Duka."
    },
    {
        name: "Fatma Abdi",
        title: "User-Friendly and Insightful",
        testimonial: "I love how user-friendly Duka is! The analytics dashboard gives me valuable insights into my sales and customer behavior, helping me make informed decisions. Plus, their SEO tools have helped me reach a wider audience. Duka is a must-have for any seller!"
    },
    {
        name: "David",
        title: "A Lifesaver for E-Commerce",
        testimonial: "Duka has been a lifesaver for my e-commerce business. The seamless payment integration is so efficient and a load of my shoulders! I appreciate the 24/7 customer support, which has been incredibly helpful whenever I have questions."
    },
    {
        name: "Jessica Nyambura",
        title: "Smooth Transition to Online Sales",
        testimonial: "I was hesitant to move my business outside Instagram and tiktok, but Duka made the move worth while. The platform is intuitive, and I love the flexibility it offers. My store looks professional, and I've seen a noticeable increase in sales since I started using Duka!"
    },
    {
        name: "Brian Kirwa",
        title: "Perfect Solution for Sellers",
        testimonial: "Duka is the perfect solution for anyone looking to sell online. I can focus on growing my business instead of worrying about technical issues. I highly recommend Duka to anyone wanting to take their sales to the next level!"
    }
]

function Testimonials() {
  return (
    <div className="px-4 md:px-8 py-10 bg-white">
        <div className="flex gap-1 justify-center md:justify-start items-center">
                                <Image src='/logo.svg' alt='logo' width={30} height={30} />
                        <p className="text-xs font-semibold">TESTIMONIALS</p>
                            </div>
                            <h2 className="text-2xl text-center md:text-left md:text-4xl font-semibold">What do other entrepreneurs
                            say about Duka?</h2>
    <div className="flex flex-col md:flex-row gap-5 mt-3 lg:mt-8 w-full overflow-auto md:py-5">
                {testimonials.map((testimonial,index)=>(
                    <article key={index} className="bg-[#fcfcfc] border-2 border-[#f4f4f4] p-3 md:p-10 rounded-xl flex-shrink-0 max-w-[350px]">
                        <h3 className="text-xl md:text-2xl font-semibold">{testimonial.title}</h3>
                        <p className="text-gray-600  my-2 md:my-4">{testimonial.testimonial}</p>
                        <p className="font-semibold">{testimonial.name}</p>
                    </article>
                ))}
            </div>
    </div>
  )
}

export default Testimonials