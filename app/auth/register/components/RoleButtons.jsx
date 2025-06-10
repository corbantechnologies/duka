'use client';

import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const RoleButtons = () => {
    const [role, setRole] =  useState('')
  return (
    <div>
    <div className="flex gap-5">
            <button onClick={()=>setRole('buyer')} className={`${role === 'buyer' ? 'border-2 border-primary' : 'border'} relative text-bold text-sm font-semibold grid py-8 px-10 md:px-16 rounded-lg place-content-center`}>
                BUYER
                <CircleCheck className={`${role === 'buyer' ? 'block':'hidden'} absolute top-0 right-0 fill-primary text-white`} />
            </button>
            <button onClick={()=>setRole('seller')} className={`${role === 'seller' ? 'border-2 border-primary' : 'border'} relative text-bold text-sm font-semibold grid py-8 px-8 md:px-14 rounded-lg place-content-center`}>
                SELLER
                <CircleCheck className={`${role === 'seller' ? 'block':'hidden'} absolute top-0 right-0 fill-primary text-white`} />
            </button>
        </div>
        <div className="mt-5 flex justify-center">
        <Link href={`/auth/register/accounttype?user=${role}`}>
        <Button disabled={role === ''} className={`${role === '' ? 'cursor-not-allowed' :''} rounded-md`}>{`Create account ${role === 'buyer' ? 'as a buyer' : role === 'seller' ? 'as a seller' : ''}`}</Button>
        </Link>
        </div>
    </div>
  )
}

export default RoleButtons