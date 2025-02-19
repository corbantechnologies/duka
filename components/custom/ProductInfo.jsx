"use client";

import { useState } from "react";

function ProductInfo() {
  const [reviewsTabActive, setReviewsTabActive] = useState(false);
  const stars = Array(5).fill("⭐");
  return (
    <div className="border py-4 px-3 rounded-xl">
      <ul className="flex flex-col lg:flex-row gap-2 border-b pb-4 justify-between text-lg">
        <li>
          <button onClick={()=>setReviewsTabActive(false)} className={`py-2 px-5 rounded-full ${!reviewsTabActive ? "bg-slate-100" : "outline outline-gray-300 outline-[1px] bg-transparent"}`}>Product description</button>
        </li>
        <li>
          <button onClick={()=>setReviewsTabActive(true)} className={`py-2 px-5 rounded-full ${reviewsTabActive ? "bg-slate-100" : "outline outline-gray-300 outline-[1px] bg-transparent"} `}>
          <span>320</span> reviews
        <span>
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </span>
          </button>
        </li>
      </ul>

          {!reviewsTabActive && 
          <div className="mt-4 space-y-1">
            <h1 className="text-lg underline">About this item</h1>
            <p>Transform your living area into a stylish sanctuary with our stunning pink one-seater sofa. Designed for both comfort and elegance, this sofa is the perfect addition to any modern home.</p>
            <ul className="list-disc list-inside">
              <li>Vibrant color</li>
              <li>Luxurious comfort</li>
              <li>Stylish design</li>
              <li>Durable</li>
              <li>Compact size</li>
            </ul>
            <p>Spot clean with a damp cloth. Avoid direct sunlight to maintain color vibrancy.</p>
          </div>
           }
      
      {reviewsTabActive && <div>
            <ul className="space-y-3 mt-4">
              {Array.from({ length: 5 }, (_, index) => (
                <li key={index} className="space-y-2 border-b pb-5">
                  <span>
                    {stars.map((star, index) => (
                      <span key={index}>{star}</span>
                    ))}
                  </span>
                  <p>
                    Great product. Quality is amazing as described, and it arrived in
                    a timely manner
                  </p>
                  <p className="text-gray-700">Tony Ligogo Jan 27, 2025</p>
                </li>
              ))}
            </ul>
      </div>}
 
    </div>
  );
}

export default ProductInfo;
