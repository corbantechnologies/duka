'use client';

import ProductList from './ProductList'

function Recents() {
  return (
    <div>
        <h1 className="text-2xl lg:text-3xl font-semibold mb-5">You showed interest</h1>
        <ProductList/>
    </div>
  )
}

export default Recents