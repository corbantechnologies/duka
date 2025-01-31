"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
import { Button } from "../ui/button";
import Image from "next/image";
import { Calendar, Heart, Package, Truck } from "lucide-react";
import Link from "next/link";
function OrderForm() {
  const stars = Array(5).fill("⭐");
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <p className="text-xl">My awesome product name</p>
        <p className="flex items-center gap-2">
          <span className="text-xl font-semibold">KSH 340.00</span>
          <span className=" line-through text-sm text-gray-700 ">
            KSH 440.00
          </span>
        </p>
        <p className="flex items-center">
          <span>theultimateseller</span>
          <span>
            {stars.map((star, index) => (
              <span key={index}>{star}</span>
            ))}
          </span>
        </p>
      </div>
      <div className="space-y-3">
        <div>
          <p>Size</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sizes</SelectLabel>
                <SelectItem value="Small">Small</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Large">Large</SelectItem>
                <SelectItem value="Extra large">Extra large</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <p>Color</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a color" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Available colors</SelectLabel>
                <SelectItem value="Black">Black</SelectItem>
                <SelectItem value="Gray">Gray</SelectItem>
                <SelectItem value="Sand">Sand</SelectItem>
                <SelectItem value="Navy blue">Navy blue</SelectItem>
                <SelectItem value="White">White</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p>Quantity</p>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select quantity" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              <SelectGroup>
                <SelectLabel>Select quantity</SelectLabel>
                {Array.from({ length: 20 }, (_, index) => (
                  <SelectItem key={index + 1} value={index + 1}>
                    {index + 1}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className='w-full text-[17px]'>Add to Cart</Button>
      <div>
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className='text-[17px]'>Shipping and return policies</AccordionTrigger>
        <AccordionContent>
         <ul className="space-y-2 text-gray-900">
            <li className="flex gap-1 items-center">
                <Calendar size={16}/> Delivery done in 1-5 days
            </li>
            <li className="flex gap-1 items-center">
            <Package size={16} /> Returns & exchanges accepted
            </li>
            <li className="flex gap-1 items-center">
            <Truck size={16} /> Delivery fee: KSH 120
            </li>
         </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='text-[17px]'>Meet your seller</AccordionTrigger>
        <AccordionContent>
          <div className="flex gap-3">
            <Image src="/cartLogo.png" alt="cart logo" width={70} height={70} className="rounded-lg" />
            <div>
                <p className="text-lg">Tony Ligogo</p>
                <span>Owner of <Link href='#' className="underline">theultimateseller</Link> </span>
                <p className="flex items-center gap-1 mt-1">
                <Heart size={16} />
                    <span>Follow shop</span>
                </p>
            </div>
          </div>
          <Button variant='outline' className='w-full border-black mt-5'>Message Tony Ligogo</Button>
          <p className="text-center text-gray-700 mt-1">This seller usually responds with a few hours</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
    </div>
  );
}

export default OrderForm;
