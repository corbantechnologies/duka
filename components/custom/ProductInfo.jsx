'use client';

import { useState } from "react";

function ProductInfo({ product }) {
  const [reviewsTabActive, setReviewsTabActive] = useState(false);
  // const stars = Array(5).fill("⭐");
  return (
    <div className="border py-4 px-3 rounded-xl">
      <ul className="flex flex-col lg:flex-row gap-3 md:gap-5 border-b pb-4 text-lg">
        <li>
          <button
            // onClick={() => setReviewsTabActive(false)}
            className={`py-2 px-5 rounded-full ${
              !reviewsTabActive
                ? "bg-slate-100"
                : "outline outline-gray-300 outline-[1px] bg-transparent"
            }`}
          >
            Product description
          </button>
        </li>
        {/* <li>
          <button
            // onClick={() => setReviewsTabActive(true)}
            className={`py-2 px-5 rounded-full ${
              reviewsTabActive
                ? "bg-slate-100"
                : "outline outline-gray-300 outline-[1px] bg-transparent"
            } `}
          >
            <span>320</span> reviews
            <span>
              {stars.map((star, index) => (
                <span key={index}>{star}</span>
              ))}
            </span>
          </button>
        </li> */}
      </ul>

      {!reviewsTabActive && (
        <div className="mt-4 space-y-1">
          <h1 className="text-lg underline">About this item</h1>
          {product?.description ? (
            <div>
              <p>{product?.description ? product?.description : null}</p>
            </div>
          ) : null}
          <div>
            {product?.features ? (
              <p className="mb-1 underline text-[15px]">Features</p>
            ) : null}
            <div>
              {product?.features
                ? product?.features?.map((feature) => (
                    <span
                      key={feature}
                      className="bg-slate-100 mr-2 text-sm px-4 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))
                : null}
            </div>
          </div>
        </div>
      )}

      {reviewsTabActive && (
        <div>
          <ul className="space-y-3 mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
            {Array.from({ length: 3 }, (_, index) => (
              <li key={index} className="space-y-2 border-b pb-5">
                <span>
                  {stars.map((star, index) => (
                    <span key={index}>{star}</span>
                  ))}
                </span>
                <p>
                  Great product. Quality is amazing as described, and it arrived
                  in a timely manner
                </p>
                <p className="text-gray-700">Tony Ligogo Jan 27, 2025</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
