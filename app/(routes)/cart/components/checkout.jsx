'use client';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useAxiosAuth from "@/hooks/general/useAxiosAuth";
import { useCreateOrder } from "@/lib/react-query/queriesAndMutations";
import { useState } from "react"
import toast from "react-hot-toast";

const Checkout = () => {
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(false)
    const axiosAuth = useAxiosAuth()
    const {mutateAsync: createOrder} = useCreateOrder()

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
            if (result?.success) {
                toast.success("Order created successfully", {
                  id: "createsuccess",
                });
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
    <div>
        <form onSubmit={handleSubmit}>
            <Label>Shipping address</Label>
            <Input
            id='address'
            name='address'
            placeholder='Kasarani,Nairobi'
            onChange={(e)=>setAddress(e.target.value)}
            value={address}
            />
            <button disabled={loading} type='submit'>{loading ? 'Loading...' :'Checkout' }</button>
        </form>
    </div>
  )
}

export default Checkout