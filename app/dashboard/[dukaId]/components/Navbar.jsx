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
import Image from "next/image";

function Navbar({ shops }) {
  const {
    isLoading: isLoadingAccount,
    data: account,
    refetch: refetchAccount,
  } = useFetchUser();
  const getInitials = () => {
    if (!account) return "";
    const firstInitial = account.first_name ? account.first_name.charAt(0) : "";
    const lastInitial = account.last_name ? account.last_name.charAt(0) : "";
    return (firstInitial + lastInitial).toUpperCase();
  };
  return (
    <nav className="flex items-center w-full bg-white p-4 rounded-lg justify-between">
      <div className="flex gap-x-3 items-center font-semibold">
        <Image src="/logo2.png" alt="logo" width={100} height={80} />
      </div>
      <div className="flex items-center gap-5">
        <div className="">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="My shops" />
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
          <div>
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
