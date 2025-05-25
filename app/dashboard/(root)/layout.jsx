'use client';

import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react'; 
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { getSellerShops } from '@/tools/api';
import useAxiosAuth from '@/hooks/general/useAxiosAuth'; 
import { useFetchUser } from '@/hooks/accounts/actions'; 

export default function DashboardLayout({ children }) {
  const { status: sessionStatus } = useSession();
  const router = useRouter();
  const axiosAuth = useAxiosAuth();

  const {
    data: account,
    isPending: isAccountLoading,
    isError: accountError,
  } = useFetchUser();

  const {
    data: shops,
    isPending: isShopsLoading,
    isError: shopsError,
  } = useQuery({
    queryKey: ['getSellerShops'],
    queryFn: () => getSellerShops(axiosAuth),
    enabled: sessionStatus === 'authenticated' && !isAccountLoading && !account?.is_customer,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const [redirectProcessed, setRedirectProcessed] = useState(false);

  useEffect(() => {
    if (sessionStatus === 'unauthenticated') {
      router.replace('/auth/login');
      return; 
    }
    if (sessionStatus === 'loading' || isAccountLoading || (account && !account.is_customer && isShopsLoading)) {
      return;
    }

    if (accountError || shopsError) {
      console.error('Error in DashboardLayout:', accountError || shopsError);
    }

    if (sessionStatus === 'authenticated' && account) {
      if (account.is_customer) {
        router.replace(`/dashboard/user/${account.id}`);
      } else {
        if (shops && shops.length > 0) {
          router.replace(`/dashboard/${shops[0].slug}`);
        } else {
          router.replace(`/dashboard/seller/create-store`);
        }
      }
    }
    setRedirectProcessed(true);

  }, [
    sessionStatus,
    isAccountLoading,
    isShopsLoading,
    account,
    shops,
    router,
    accountError,
    shopsError
  ]);

  if (sessionStatus === 'loading' || isAccountLoading || (sessionStatus === 'authenticated' && account && !account.is_customer && isShopsLoading)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin h-10 w-10 text-gray-500" />
      </div>
    );
  }

  if (!redirectProcessed) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin h-10 w-10 text-gray-500" />
      </div>
    );
  }

  return (
    <div>
      {children}
    </div>
  );
}