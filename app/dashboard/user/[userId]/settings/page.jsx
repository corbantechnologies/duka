'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFetchUser } from "@/hooks/accounts/actions";
import { MapPinHouse, UserRound } from "lucide-react";
import { useState } from "react";
import Account from "./components/Account";
import Shipping from "./components/Shipping";

const Settings = () => {
    const {
            data: account,
        } = useFetchUser();
        const [activeTab, setActiveTab] = useState('account')
    const getInitials = () => {
        if (!account) return "";
        const firstInitial = account.first_name ? account.first_name.charAt(0) : "";
        const lastInitial = account.last_name ? account.last_name.charAt(0) : "";
        return (firstInitial + lastInitial).toUpperCase();
      };
  return (
    <div className='flex-grow flex flex-col md:flex-row gap-6 px-4 mt-2'>
        <div className='flex-1 flex flex-col-reverse md:flex-col'>
            <div>
                <p className="text-gray-500 text-sm mb-3">Personal</p>
                <div className="space-y-2">
                    <button onClick={()=>setActiveTab('account')} className={`px-4 py-1.5 rounded-md w-full flex gap-2 text-[15px] items-center ${activeTab === 'account' ? 'bg-primary text-white' : 'text-gray-600 font-medium'}`}><UserRound size={18} /> Account</button>                </div>
                <p className="text-gray-500 text-sm mt-5 mb-3">Shipping</p>
                <button onClick={()=>setActiveTab('shipping information')} className={`px-4 py-1.5 rounded-md w-full flex gap-2 text-[15px] items-center ${activeTab === 'shipping information' ? 'bg-primary text-white' : 'text-gray-600 font-medium'}`}><MapPinHouse size={18} />Shipping Information</button>
            </div>
            <div className="mb-5 md:mt-5 flex gap-2">
                 <Avatar>
                            <AvatarImage src={account?.avatar} className='object-cover' />
                            <AvatarFallback className="bg-primary text-white">
                              {getInitials()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p>{account?.first_name}{' '}{account?.last_name}</p>
                            <p className="text-xs text-gray-500">{account?.email}</p>
                          </div>
            </div>
        </div>
        <div className='flex-[4] mb-10'>
            <h1 className="text-2xl md:text-3xl font-semibold capitalize">{activeTab}</h1>
            <div className="mt-5">
                {activeTab === 'account' ?
                    <Account/>
                    :activeTab === 'shipping information'?
                    <Shipping/>
                    :null
                }
            </div>
        </div>
    </div>
  )
}

export default Settings