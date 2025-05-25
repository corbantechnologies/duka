import { formatter } from "@/lib/utils"
import Image from "next/image"

const Orders = () => {
  return (
    <div className="w-full">
      <h1 className='text-2xl px-4 md:text-3xl font-semibold mb-2'>Orders</h1>
      <div className="w-full p-5 overflow-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-50 border-t border-b">
                      <th className='text-left py-2 font-normal text-gray-500'>Product Image</th>
                      <th className='text-left py-2 font-normal text-gray-500'>Product name</th>
                      <th className='text-left py-2 font-normal text-gray-500'>Seller</th>
                      <th className='text-left py-2 font-normal text-gray-500'>Quantity</th>
                      <th className='text-left py-2 font-normal text-gray-500'>Unit price</th>
                      <th className='text-left py-2 font-normal text-gray-500'>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="flex gap-1 py-4">
                        <Image
                          src='/shirts.jpg'
                          alt="logo"
                          width={50}
                          height={50}
                          className="rounded-md h-[50px] w-[50px] object-cover"
                        />
                      </td>
                      <td className="py-4">T-shirt</td>
                      <td className="py-4">
                      Comfortt
                      </td>
                      <td className="px-4 py-4">2</td>
                      <td className="py-4">{formatter.format(400)}</td>
                      <td className="py-4">{formatter.format(800)}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="flex gap-1 py-4">
                        <Image
                          src='/footwear.jpg'
                          alt="logo"
                          width={50}
                          height={50}
                          className="rounded-md h-[50px] w-[50px] object-cover"
                        />
                      </td>
                      <td className="py-4">Nike Air Force 1</td>
                      <td className="py-4">
                      Shoe_zy
                      </td>
                      <td className="px-4 py-4">2</td>
                      <td className="py-4">{formatter.format(2500)}</td>
                      <td className="py-4">{formatter.format(3000)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
    </div>
  )
}

export default Orders