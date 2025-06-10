
import ProductList from "./ProductList";

function FeaturedProducts() {
  return (
    <div className="px-4 lg:px-8">
        <h1 className="text-2xl lg:text-3xl font-semibold">Featured Products</h1>
        <ProductList/>
    </div>
  )
}

export default FeaturedProducts