'use client';

import { dehydrate, HydrationBoundary, QueryClient, useQuery } from '@tanstack/react-query'
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getShops } from "@/tools/api";
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
export default function SetupLayout({children}) {
    const query = new QueryClient()
    const{status} = useSession();
    const router = useRouter();
    useEffect(() => {
      if (status === 'unauthenticated') {
        router.replace('/auth/login');
      }
    }, [status, router]);

    const {
      data: shops,
    } = useQuery({
      queryKey: ["getShops"],
      queryFn: () => getShops(),
    });

    if (status === 'loading' || status === 'unauthenticated') {
      return (
        <div className="">
          <Loader2 className="animate-spin" />
        </div>
      );
    }
  return (
    <HydrationBoundary state={dehydrate(query)}>
      <main className="h-screen overflow-hidden flex flex-col bg-slate-100 gap-4 p-4">
      <Navbar shops={shops}/>
        <div className='flex-grow overflow-y-auto flex gap-4'>
            <Sidebar/>
            <div className='overflow-y-scroll flex-grow bg-white p-4 rounded-lg overflow-hidden'>
                <div>{children}</div>
            </div>
        </div>
      </main>
    </HydrationBoundary>
  )
}
