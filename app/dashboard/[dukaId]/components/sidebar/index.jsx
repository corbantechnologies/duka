"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Boxes, ChartNoAxesCombined, CircleHelp, CirclePlus, LayoutDashboard, LogOut, Menu, Settings, ShoppingBag } from "lucide-react";
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
    {title:'Help',path:'/help', href:`/dashboard/${dukaId}/help`, icon: <CircleHelp size={20} strokeWidth={1.25} />},
    {title:'Settings',path:'/settings', href:`/dashboard/${dukaId}/settings`, icon: <Settings size={20} strokeWidth={1.25} />},
  ]
  const SidebarComponent =( 
    <div className="flex-none bg-white relative p-4 rounded-lg h-full lg:w-[250px] flex flex-col gap-4 overflow-auto">
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
      <button onClick={() => signOut({ redirect: true, callbackUrl: process.env.NEXTAUTH_URL, })} className="flex pl-4 lg:pl-0 gap-2 items-center">
        <LogOut size={20} strokeWidth={1.25} />
        <span className="md:hidden lg:inline-flex">
            Logout
            </span>
      </button>
    </div>
  );
  return (
    <div className="h-full">
      <div className="md:hidden fixed my-4">
      <Sheet>
        <SheetTrigger asChild className="ml-4 md:ml-2">
          <Button variant="ghost" className="mt-[2px] size-sm px-3"><Menu/></Button>
        </SheetTrigger>
        <SheetContent side='left' className="p-0 w-fit h-full">
        <SheetHeader>
        <SheetTitle className='sr-only'>Sidebar</SheetTitle>
        </SheetHeader>
        <div className="flex ml-3 mt-3 gap-x-3 items-center font-semibold">
                <Image src="/logo2.png" alt="logo" width={100} height={80} />
              </div>
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
