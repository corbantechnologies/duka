"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function Reviews() {
  const stars = Array(5).fill("⭐");
  return (
    <div>
      <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>
    <h1 className="text-xl">
        <span className="text-2xl">320</span> reviews
        <span>
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </span>
      </h1>
    </AccordionTrigger>
    <AccordionContent>
      <div>
            <div className="flex gap-5 my-5 border-b-2 pb-2">
              <p>
                Reviews for this item{" "}
                <span className="bg-gray-200 py-1 px-2 rounded-lg">20</span>
              </p>
              <p>
                Reviews for this shop{" "}
                <span className="bg-gray-200 py-1 px-2 rounded-lg">300</span>{" "}
              </p>
            </div>
            <ul className="space-y-3">
              {Array.from({ length: 5 }, (_, index) => (
                <li key={index} className="space-y-2 border-b pb-5">
                  <span>
                    {stars.map((star, index) => (
                      <span key={index}>{star}</span>
                    ))}
                  </span>
                  <p>
                    Great product. Quality is amazing as described, and it arrived in
                    a timely manner
                  </p>
                  <p className="text-gray-700">Tony Ligogo Jan 27, 2025</p>
                </li>
              ))}
            </ul>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div>
  );
}

export default Reviews;
