"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";


const Sidebar = () => {
  
  const SidebarComponent =( 
    <div className="flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center overflow-auto">
      <div className="flex p-4 gap-2 justify-center items-center absolute top-0 left-0 right-0 mb-4">
        <Image src='/logo2.png' alt='logo' width={100} height={80} />
      </div>
    </div>
  );
  return (
    <div className="full">
      <InfoBar/>
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

export default Sidebar;
