"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { CirclePlus, LayoutDashboard, LogOut, Menu, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const CreateStoreSidebar = () => {
    const pathname = usePathname()
   const MENU_ITEMS = [
    {title:'Dashboard',path:'/dashboard', href:`/dashboard`, icon: <LayoutDashboard size={20} strokeWidth={1.25} />},
    {title:'Create store',path:'/shop', href:`/dashboard/shop/create`, icon: <CirclePlus size={20} strokeWidth={1.25} />},
    {title:'Settings',path:'/settings', href:`/dashboard/settings`, icon: <Settings size={20} strokeWidth={1.25} />},
  ]
  const SidebarComponent =( 
    <div className="flex-none bg-white relative p-4 rounded-lg h-full lg:w-[250px] flex flex-col gap-4 overflow-auto">
      <p className="text-gray-500 hidden lg:block">Menu</p>
     <ul className="space-y-3">
      {MENU_ITEMS.map((item)=>(
        <li key={item.title} className={`px-3 py-2 rounded-lg ${pathname === item.href && 'bg-primary text-white'}`}>
          <Link href={item.href} className="flex gap-2 items-center">
            {item.icon}
            <span className="hidden lg:inline-flex">
            {item.title}
            </span>
          </Link>
        </li>
      ))}
     </ul>
      <button onClick={() => signOut()} className="flex pl-4 lg:pl-0 gap-2 items-center">
        <LogOut size={20} strokeWidth={1.25} />
        <span className="hidden lg:inline-flex">
            Logout
            </span>
      </button>
    </div>
  );
  return (
    <div className="full">
      <div className="md:hidden fixed my-4">
      <Sheet>
        <SheetTrigger asChild className="ml-2">
          <Button variant="ghost" className="mt-[2px]"><Menu/></Button>
        </SheetTrigger>
        <SheetContent side='left' className="p-0 w-fit h-full">
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

export default CreateStoreSidebar;
