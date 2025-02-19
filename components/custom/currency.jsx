'use client';
import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";

const Currency = ({value}) => {
    const[isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) return null;
    
  return (
    <div className="text-sm font-semibold">
        {formatter.format(Number(value))}
    </div>
  )
}

export default Currency