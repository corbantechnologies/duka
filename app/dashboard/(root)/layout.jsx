'use client';

import { useQuery } from '@tanstack/react-query'
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getShops } from "@/tools/api";
export default function Layout({children}) {
    const{status} = useSession();
    const router = useRouter();

    const {
      data: shops,
      isSuccess,
      isPending
    } = useQuery({
      queryKey: ["getShops"],
      queryFn: () => getShops(),
    });

    useEffect(() => {
      if (status === 'loading') {
        return;
      }
      
      if (status === 'unauthenticated') {
        router.replace('/auth/login');
      }
    }, [status, router]);

    useEffect(() => {
      if (isSuccess && shops && shops.length > 0) {
        router.replace(`/dashboard/${shops[0].slug}`);
      }
    }, [isSuccess, shops, router]);

    if (status === 'loading' || isPending || status === 'unauthenticated') {
      return (
        <div className="">
          <Loader2 className="animate-spin" />
        </div>
      );
    }

  return (
    <div>{children}</div>
  )
}
