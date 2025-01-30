'use client';

import { Gift, Heart, Menu, ShoppingCart } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from '../ui/input';

function MainNavbar() {
  return (
    <nav className='flex items-center justify-between gap-5 px-4 lg:px-8 bg-white z-50 fixed left-0 right-0 h-[70px]'>
        <div className='flex items-center flex-1'>
    <Link href='/seller/onboarding' className="flex items-end">
    <span className="font-bold text-3xl leading-none text-black">Duka</span>
    <Image src='/logo.svg' alt='logo' width={30} height={30} />
    </Link>
        <Select>
      <SelectTrigger className="w-[180px] border-none shadow-none">
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
            <Input type='search' className='flex-1' placeholder='Search for anything' />
    <ul className='flex flex-1 items-center justify-end gap-5 '>
        <li>
        <Gift />
        </li>
        <li>
        <Heart />
        </li>
        <li>
        <ShoppingCart />
        </li>
        <li>
            <button className='bg-primary text-white py-2 px-5 rounded-md'>Sign in</button>
        </li>
    </ul>
    <Menu className="md:hidden" />
</nav>
  )
}

export default MainNavbar