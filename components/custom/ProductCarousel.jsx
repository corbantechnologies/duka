'use client'; 

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ProductCarousel({images}) {
  return (
    <div className="flex items-center lg:items-start flex-col-reverse lg:flex-row">
<div className="flex justify-center items-center mt-3 lg:mt-0 lg:block">
  {images && images.map((image)=>(
    <div key={image.id} className="p-1 md:p-2">
    <div className="size-12 md:size-16 ">
        <img src={image.image} alt="product" className="w-full rounded-md" />
    </div>
  </div>
  ))}
</div>
<Carousel className="md:ml-0 lg:ml-20 max-w-[250px] md:w-full md:max-w-[350px]">
<CarouselContent>
  {images && images.map((image) => (
    <CarouselItem key={image.id}>
      <div className="p-1">
        <Card>
          <CardContent className="flex aspect-square items-center justify-center">
          <img src={image.image} alt="product" className="md:w-full h-full object-contain rounded-md" />
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

