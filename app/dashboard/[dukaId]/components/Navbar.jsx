"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFetchUser } from "@/hooks/accounts/actions";
import useActiveStore from "@/hooks/use-active-store";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";

function Navbar({ shops }) {
  const {
    data: account,
  } = useFetchUser();
  const {dukaId} = useParams()
  const activeStore = useActiveStore();
  const getInitials = () => {
    if (!account) return "";
    const firstInitial = account.first_name ? account.first_name.charAt(0) : "";
    const lastInitial = account.last_name ? account.last_name.charAt(0) : "";
    return (firstInitial + lastInitial).toUpperCase();
  };
  useEffect(()=>{
    activeStore.setStoreId(dukaId)
  },[dukaId])

  const currentStore = shops?.find((shop) => shop.slug === dukaId);
  return (
    <nav className="flex items-center w-full bg-white p-4 rounded-lg justify-between">
      <div className="flex gap-x-3 items-center font-semibold">
        <Image src="/logo2.png" alt="logo" width={100} height={80} />
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden md:block">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={currentStore?.name} />
            </SelectTrigger>
            <SelectContent>
              {shops?.map((shop) => (
                <SelectItem key={shop.name} value={shop.name}>
                  {shop.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-1">
          <Avatar>
            <AvatarImage src={account?.avatar} />
            <AvatarFallback className="bg-primary text-white">
              {getInitials()}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <span>
              {account?.first_name} {account?.last_name}
            </span>
            <span className="text-gray-500 block leading-none text-sm">
              {account?.email}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
