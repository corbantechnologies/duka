'use client';

import Link from "next/link";
import ProductList from "./ProductList";

function ProductSuggestions() {
  return (
    <div>
        <div className='flex items-center gap-5 mb-5'>
        <h1 className="text-2xl lg:text-3xl font-semibold">You may also like</h1>
        <Link href='#' className="underline text-sm">View more</Link>
        </div>
        <ProductList/>
    </div>
  )
}

export default ProductSuggestions