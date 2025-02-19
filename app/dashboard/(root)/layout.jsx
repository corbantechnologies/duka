'use client';

import { useQuery } from '@tanstack/react-query'
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getSellerShops } from "@/tools/api";
import useAxiosAuth from '@/hooks/general/useAxiosAuth';
import { useFetchUser } from '@/hooks/accounts/actions';
export default function Layout({children}) {
    const{status} = useSession();
    const router = useRouter();
    const axiosAuth = useAxiosAuth()
    const {
      data: shops,
      isPending
    } = useQuery({
      queryKey: ["getSellerShops"],
      queryFn: () => getSellerShops(axiosAuth),
      enabled: status === 'authenticated'
    });
    const {
        data: account,
        isPending:isLoadingUser
      } = useFetchUser();

    useEffect(() => {
      if (status !== 'loading' && status === 'unauthenticated') {
        router.replace('/auth/login');
      }
    }, [status, router]);
    
    useEffect(() => {
      if (shops?.length > 0) {
        router.replace(`/dashboard/${shops[0].slug}`);
      }
    }, [shops, router]);

    useEffect(() => {
        if(!isPending && !shops && account && account?.is_customer){
          router.replace(`/dashboard/user/${account.id}`);
        }
    }, [account, router]);

    if (status === 'loading' && isPending && isLoadingUser) {
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
