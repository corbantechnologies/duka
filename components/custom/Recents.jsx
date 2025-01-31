'use client';

import ProductList from './ProductList'

function Recents() {
  return (
    <div>
        <h1 className="text-3xl mb-5">You were interested in these</h1>
        <ProductList/>
    </div>
  )
}

export default Recents