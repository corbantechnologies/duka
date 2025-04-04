"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Boxes, ChartNoAxesCombined, CircleHelp, CirclePlus, Instagram, LayoutDashboard, LogOut, Menu, Settings, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Sidebar = () => {
  const {dukaId} = useParams()
  const pathname = usePathname()
   const MENU_ITEMS = [
    {title:'Dashboard',path:'/dashboard', href:`/dashboard/${dukaId}`, icon: <LayoutDashboard size={20} strokeWidth={1.25} />},
    {title:'My Products',path:'/products', href:`/dashboard/${dukaId}/products`, icon: <Boxes size={20} strokeWidth={1.25} />},
    {title:'Order History',path:'/orders', href:`/dashboard/${dukaId}/orders`, icon: <ShoppingBag size={20} strokeWidth={1.25} />},
    {title:'My Revenue',path:'/revenue', href:`/dashboard/${dukaId}/revenue`, icon: <ChartNoAxesCombined size={20} strokeWidth={1.25} />},
  ]
  const SETTINGS_ITEMS = [
    {title:'Help',path:'/help', href:'#', icon: <CircleHelp size={20} strokeWidth={1.25} />},
    {title:'Settings',path:'/settings', href:`/dashboard/${dukaId}/settings`, icon: <Settings size={20} strokeWidth={1.25} />},
  ]
  const SidebarComponent =( 
    <div className="flex-none bg-white relative p-4 rounded-lg h-full lg:w-[250px] flex flex-col gap-4 overflow-auto">
      <div className="md:hidden">
          <Image src="/logo2.png" alt="logo" width={100} height={80} />
      </div>
      <p className="text-gray-500 md:hidden lg:block">Menu</p>
     <ul className="space-y-3">
      {MENU_ITEMS.map((item)=>(
        <li key={item.title} className={`px-3 py-2 rounded-lg ${pathname === item.href && 'bg-primary text-white'}`}>
          <Link href={item.href} className="flex gap-2 items-center">
            {item.icon}
            <span className="md:hidden lg:inline-flex">
            {item.title}
            </span>
          </Link>
        </li>
      ))}
     </ul>
     <p className="text-gray-500 md:hidden lg:block">Settings</p>
     <ul className="space-y-3">
      {SETTINGS_ITEMS.map((item)=>(
        <li key={item.title} className={`px-3 py-2 rounded-lg ${pathname === item.href && 'bg-primary text-white'}`}>
          <Link href={item.href} className="flex gap-2 items-center">
            {item.icon}
            <span className="md:hidden lg:inline-flex">
            {item.title}
            </span>
          </Link>
        </li>
      ))}
     </ul>
     {/* <Link href={`/dashboard/${dukaId}/shop/create`} className="flex pl-3 mb-2 lg:pl-0 gap-2 items-center">
     <CirclePlus size={20} strokeWidth={1.25} /> 
     <span className="md:hidden lg:inline-flex">
            Create store
            </span>
     </Link> */}
     <div className="md:hidden lg:block">
      <span className="text-gray-500">Connect with us</span>
      <ul className="flex gap-2 mt-1">
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon size-6" fill='#0073e6' viewBox="0 0 512 512"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fillRule="evenodd"/></svg>
                </li>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon size-6" fill='#0073e6' viewBox="0 0 512 512"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>
                </li>
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon size-6" fill='#0073e6' viewBox="0 0 512 512"><path d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" fillRule="evenodd"/></svg>
                </li>
            </ul>
     <div className="flex flex-col justify-center items-center ">
      <img src="/support.png" alt="support" className="w-32 h-36 lg:w-30 lg:h-50" />
      <p className="font-semibold text-lg">Hi, how can we help?</p>
      <p className="text-center mb-5 mt-2 text-sm text-gray-500">Contact us if you need any assistance, we will contact you as soon as possible</p>
      <button className="bg-primary w-full text-white px-4 py-2 rounded-md">Contact</button>
     </div>
     </div>
      <button onClick={() => signOut({ redirect: true, callbackUrl: process.env.NEXTAUTH_URL, })} className="flex pl-4 lg:pl-0 gap-2 items-center">
        <LogOut size={20} strokeWidth={1.25} />
        <span className="md:hidden lg:inline-flex">
            Logout
        </span>
      </button>
    </div>
  );
  return (
    <div className="h-full border-r-2 border-slate-100">
      <div className="md:hidden fixed my-4">
      <Sheet>
        <SheetTrigger asChild className="ml-4 md:ml-2">
          <Button variant="ghost" className="mt-[2px] size-sm px-3"><Menu/></Button>
        </SheetTrigger>
        <SheetContent side='left' className="p-0 w-[85%] h-full overflow-auto">
        <SheetHeader>
        <SheetTitle className='sr-only'>Sidebar</SheetTitle>
        </SheetHeader>
          {SidebarComponent}
        </SheetContent>
      </Sheet>
      </div>
      <div className="hidden md:block h-full">
        {SidebarComponent}
      </div>
    </div>
  );
};

export default Sidebar;
