'use client';

import ProductList from './ProductList'

function Recents() {
  return (
    <div className='pb-8'>
        <h1 className="text-2xl lg:text-3xl font-semibold mb-5">Explore collections</h1>
        <ProductList/>
    </div>
  )
}

export default Recents