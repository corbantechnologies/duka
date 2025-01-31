import { Heart } from "lucide-react"
import ProductList from "./ProductList"
import Link from "next/link"

function MoreProducts() {
  return (
    <div>
        <div className="flex flex-col gap-5 mb-5">
            <h1 className="text-2xl lg:text-3xl font-semibold">More from this shop</h1>
            <div className="flex items-center gap-5">
                <button className="border-2 border-gray-900 transition-all duration-300 hover:bg-primary hover:text-white hover:border-transparent py-1 px-3 gap-2 rounded-full flex items-center">
                    <Heart size={18}/> Follow
                </button>
                <Link href='#' className="underline text-sm">View more</Link>
            </div>
        </div>
        <ProductList wrap='wrap'/>
    </div>
  )
}

export default MoreProducts