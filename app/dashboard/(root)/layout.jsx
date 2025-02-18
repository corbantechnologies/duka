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
      isSuccess,
      isPending
    } = useQuery({
      queryKey: ["getSellerShops"],
      queryFn: () => getSellerShops(axiosAuth),
      enabled: status === 'authenticated'
    });
    const {
        data: account,
        isPending:fetchingUser,
        iseSuccess:userFetchSuccess
      } = useFetchUser();

    // useEffect(() => {
    //   if (status === 'loading') {
    //     return;
    //   }
    //   if (status === 'unauthenticated') {
    //     router.replace('/auth/login');
    //   }
    // }, [status, router]);

    // useEffect(() => {
    //   if (!fetchingUser && userFetchSuccess) {
    //     if(account.is_customer){
    //       router.replace(`/dashboard/user/${account.id}`);
    //     }
    //   }
    // }, [fetchingUser, userFetchSuccess, account, router]);

    // useEffect(() => {
    //   if (isSuccess && shops && shops.length > 0) {
    //     router.replace(`/dashboard/${shops[0].slug}`);
    //   }
    // }, [isSuccess, shops, router]);
    
useEffect(() => {
  if (status === 'loading' || fetchingUser) {
    return;
  }

  if (status === 'unauthenticated') {
    router.replace('/auth/login');
    return; 
  }

  if (userFetchSuccess && account) {
    if (account.is_customer) {
      router.replace(`/dashboard/user/${account.id}`);
      return; 
    } else if (isSuccess && shops && shops.length > 0) {
      router.replace(`/dashboard/${shops[0].slug}`);
      return;
    }
  }
}, [status, fetchingUser, userFetchSuccess, account, isSuccess, shops, router]);

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
