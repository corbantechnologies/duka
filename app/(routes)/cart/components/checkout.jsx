'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useAxiosAuth from "@/hooks/general/useAxiosAuth";
import { useCreateOrder, useInitializePayment } from "@/lib/react-query/queriesAndMutations";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react"
import toast from "react-hot-toast";

const Checkout = () => {
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)
    const axiosAuth = useAxiosAuth()
    const router = useRouter()
    const {mutateAsync: createOrder} = useCreateOrder()
    const {mutateAsync: initializePayment} = useInitializePayment()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        const data = {
            value: {
                shipping_address: address
            },
            axiosAuth: axiosAuth
        }
        try {
            const result = await createOrder(data)
            if (result?.status === 201) {
                toast.success("Order created successfully", {
                  id: "createsuccess",
                });
                try {
                  const formData = new FormData()
                  formData.append('order_reference',result?.data?.order?.reference)
                  const data = {
                    value: formData,
                    axiosAuth: axiosAuth
                }
                  const response = await initializePayment(data)
                  if(response.status === 200){
                    router.push(`${response?.data?.redirect_url}`)
                  }
                } catch (error) {
                  toast.error("Failed to initiate payment. Please try again.",{id:'payment_error'});
                  console.log(error)
                }
              } else {
                toast.error("Failed to create order. Please try again.");
              }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
  return (
    <div className="mt-5">
        <form onSubmit={handleSubmit}>
            <Label htmlFor='address' className='text-[15px]'>Shipping address</Label>
            <Input
            id='address'
            name='address'
            onChange={(e)=>setAddress(e.target.value)}
            value={address}
            />
            <Button disabled={loading} type='submit' className='w-full mt-5' >{loading ? <Loader2 className="animate-spin" /> :'Checkout' }</Button>
        </form>
    </div>
  )
}

export default Checkout