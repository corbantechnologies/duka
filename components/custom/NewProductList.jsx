import NewProduct from "./NewProduct";

function NewProductList({products}) {
console.log(products)
  return (
    <div className={`flex gap-3 lg:gap-3 mt-3 w-full no-scrollbar snap-x overflow-auto`}>
        {products?.map((product)=>(
          <NewProduct key={product.id} product={product}/>
        ))}
        </div>
  )
}

export default NewProductList