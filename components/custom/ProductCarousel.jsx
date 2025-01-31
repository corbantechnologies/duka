'use client'; 

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ProductCarousel() {
  return (
    <div className="flex items-center lg:items-start flex-col-reverse lg:flex-row">
      <div className="flex justify-center items-center mt-3 lg:mt-0 lg:block">
        {Array.from({length:5}, (_,index)=>(
          <div key={index} className="p-1 md:p-2">
          <div className="size-12 md:size-16 ">
              <img src='/sofa.jpg' alt="product" className="w-full rounded-md" />
          </div>
        </div>
        ))}
      </div>
    <Carousel className="md:ml-14 lg:ml-20 w-[220px] md:w-full md:max-w-md">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                <img src='/sofa.jpg' alt="product" className="md:w-full rounded-md" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
