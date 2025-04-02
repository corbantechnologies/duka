import { formatter } from '@/lib/utils'
import { Truck } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const OrderDetails = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5'>
      <div>
        <div className="w-full shadow-md p-5 rounded-md overflow-auto">
        <h1 className='font-semibold mb-5 text-lg'>Order Items</h1>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th></th>
                <th className='text-left'>Product name</th>
                <th className='text-left'>Quantity</th>
                <th className='text-left'>Unit price</th>
                <th className='text-left'>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex gap-1">
                  <Image
                    src='/shirts.jpg'
                    alt="logo"
                    width={50}
                    height={60}
                    className="rounded-md h-[60px] w-[50px] object-cover"
                  />
                </td>
                <td>T-shirt</td>
                <td>2</td>
                <td>{formatter.format(400)}</td>
                <td>{formatter.format(800)}</td>
              </tr>
              <tr>
                <td className="flex gap-1">
                  <Image
                    src='/footwear.jpg'
                    alt="logo"
                    width={50}
                    height={60}
                    className="rounded-md h-[60px] w-[50px] object-cover"
                  />
                </td>
                <td>Nike Air Force 1</td>
                <td>2</td>
                <td>{formatter.format(2500)}</td>
                <td>{formatter.format(3000)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='w-full shadow-md p-5 mt-5 rounded-md overflow-auto'>
          <div className='flex justify-between'>
          <h1 className='font-semibold'>Order Totals</h1>
          <h1 className='font-semibold'>Price</h1>
          </div>
          <div>
            <p className='flex justify-between border-b pb-5 mb-5'>
              <span className='text-gray-500'>Subtotal</span>
              <span>{formatter.format(3800)}</span>
            </p>
            <p className='flex justify-between border-b pb-5 mb-5'>
              <span className='text-gray-500'>Shipping</span>
              <span>{formatter.format(100)}</span>
            </p>
            <p className='flex justify-between'>
              <span className='font-semibold'>Total</span>
              <span className='text-primary font-semibold'>{formatter.format(3900)}</span>
            </p>
          </div>
        </div>

      </div>
      <div className='space-y-5'>
        <div className='p-5 rounded-md shadow-md'>
          <h1 className='font-semibold mb-2'>Summary</h1>
          <p className='flex justify-between mb-2'>
            <span className='text-gray-500'>Order ID</span>
            <span className='font-semibold'>1234567890</span>
          </p>
          <p className='flex justify-between mb-2'>
            <span className='text-gray-500'>Date</span>
            <span className='font-semibold'>20 March 2025</span>
          </p>
          <p className='flex justify-between'>
            <span className='text-gray-500'>Total</span>
            <span className='text-primary font-semibold'>{formatter.format(3900)}</span>
          </p>
          <h1 className='font-semibold mt-5'>Shipping Address</h1>
          <p className='text-gray-500'>Quickmart, Kamiti Road, Roysambu</p>

          <button className='mt-8 border border-primary text-primary rounded-md px-5 py-2 flex items-center justify-center gap-2 w-full hover:bg-primary hover:text-white transition-all duration-300'> <Truck strokeWidth={1.5} /> Track order </button>
          
        </div>
      </div>
    </div>
  )
}

export default OrderDetails