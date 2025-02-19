"use client";

import { Gift, Heart, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import useCart from "@/hooks/use-cart";
import useWishlist from "@/hooks/use-wishlist";
import { useSession } from "next-auth/react";

function MainNavbar() {
  const{status} = useSession();
  const cart = useCart();
  const wishlist = useWishlist();
  return (
    <nav className="flex border-b items-center justify-between gap-5 px-4 lg:px-8 bg-white z-50 fixed left-0 right-0 h-[70px]">
      <div className="flex gap-5 items-center flex-1">
        <Link href="/">
          <Image src="/logo.jpg" alt="logo" width={100} height={80} />
        </Link>
        <Select>
          <SelectTrigger className="w-[180px] hidden md:flex justify-normal border-none gap-2 items-center shadow-none">
            <SelectValue placeholder="Choose category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="Art">Art</SelectItem>
              <SelectItem value="Bags & Purses">Bags & Purses</SelectItem>
              <SelectItem value="Clothing">Clothing</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Gifts">Gifts</SelectItem>
              <SelectItem value="Home & Living">Home & Living</SelectItem>
              <SelectItem value="Jewelry">Jewelry</SelectItem>
              <SelectItem value="Shoes">Shoes</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Input
        type="search"
        className="flex-1 hidden md:block"
        placeholder="Search for anything"
      />
      <ul className="hidden md:flex flex-1 items-center justify-end gap-5 ">
        <li>
          <Gift />
        </li>
        <li>
          <Link href="/wishlist" className="block relative">
            <Heart />
            {wishlist.items.length > 0 && (
              <span className="absolute -top-2 left-4 text-xs h-[20px] grid place-items-center aspect-square font-medium bg-primary text-white rounded-full px-1">
                {wishlist.items.length}
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link href="/cart" className="block relative">
            <ShoppingCart />
            {cart.items.length > 0 && (
              <span className="absolute -top-2 left-4 border border-white text-xs h-[20px] grid place-items-center aspect-square font-medium bg-primary text-white rounded-full px-1">
                {cart.items.length}
              </span>
            )}
          </Link>
        </li>
        <li>
          {status !== 'authenticated' && <button className="bg-primary text-white py-2 px-5 rounded-md">
            <Link href="/auth/login">Sign in</Link>{" "}
          </button>}
        </li>
      </ul>
      <Menu className="md:hidden text-black" />
    </nav>
  );
}

export default MainNavbar;
