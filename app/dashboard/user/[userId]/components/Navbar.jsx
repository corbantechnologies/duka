"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useFetchUser } from "@/hooks/accounts/actions";
import { LogOut, Settings } from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";


function Navbar() {
    const {
        data: account,
    } = useFetchUser();
    const {userId} = useParams()
    const [openProfile, setOpenProfile] = useState(false);
    const pathname = usePathname()
    const activepath = pathname.split('/').pop()
    const MENU_ITEMS = [
        {title:'Overview',currentPath:`${userId}`, href:`/dashboard/user/${userId}/`},
        {title:'Orders',currentPath:'orders', href:`/dashboard/user/${userId}/orders`},
        {title:'Wish List',currentPath:'wishlist', href:`/dashboard/user/${userId}/wishlist`},
      ]
  const getInitials = () => {
    if (!account) return "";
    const firstInitial = account.first_name ? account.first_name.charAt(0) : "";
    const lastInitial = account.last_name ? account.last_name.charAt(0) : "";
    return (firstInitial + lastInitial).toUpperCase();
  };
  return (
    <div>
    <nav className="flex items-center w-full p-4 justify-between">
      <div className="flex gap-x-3 items-center font-semibold">
        <Image src="/logo2.png" alt="logo" width={100} height={80} />
      </div>
      <ul className='hidden md:flex gap-5 bg-slate-100 rounded-full'>
        {MENU_ITEMS.map((item)=>(
             <li key={item.title} className={`px-5 py-2 rounded-full ${activepath === item.currentPath ? 'bg-primary text-white' : ' text-black'}`}>
             <Link href={item.href} className="flex gap-2 items-center">
               <span>
               {item.title}
               </span>
             </Link>
           </li>
        ))}
      </ul>
      <div className="flex gap-4 items-center">
        <div className='relative'>
          <Avatar className='cursor-pointer' onClick={()=>setOpenProfile(prev=>!prev)}>
            <AvatarImage src={account?.avatar} className='object-cover' />
            <AvatarFallback className="bg-primary text-white">
              {getInitials()}
            </AvatarFallback>
          </Avatar>
          {openProfile && 
          <div className='absolute right-1/3 top-11 p-4 w-64 shadow-md border z-50 bg-white rounded-xl'>
            <div className="flex justify-between mb-3">
           <div>
            <p>{account?.first_name}{' '}{account?.last_name}</p>
            <p className="text-xs text-gray-500">{account?.email}</p>
            </div>
              <button onClick={()=>setOpenProfile(false)} className="border-2 rounded-md size-6 grid place-content-center">x</button>
            </div>
            <hr />
          <button onClick={() => signOut({ redirect: true, callbackUrl: process.env.NEXTAUTH_URL, })} className="flex mt-3 pl-4 lg:pl-0 gap-2 items-center">
        <LogOut size={18} strokeWidth={1.25} />
        <span className="md:hidden lg:inline-flex">
            Logout
        </span>
      </button>
          </div>}
        </div>
          <Link href={`/dashboard/user/${userId}/settings`} className="bg-primary p-2 rounded-l-full rounded-tr-full">
          <Settings color='white' size={18}/>
          </Link>
          </div>
    </nav>
    <ul className='flex md:hidden mx-auto mb-3 w-fit bg-slate-100 rounded-full'>
        {MENU_ITEMS.map((item)=>(
             <li key={item.title} className={`px-5 py-2 rounded-full ${activepath === item.currentPath ? 'bg-primary text-white' : ' text-black'}`}>
             <Link href={item.href} className="flex gap-2 items-center">
               <span>
               {item.title}
               </span>
             </Link>
           </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
