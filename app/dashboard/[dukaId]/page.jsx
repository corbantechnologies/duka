'use client';

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { formatter } from "@/lib/utils";
import { FileBox, ShoppingBag, TrendingDown, TrendingUp, Users, Wallet } from "lucide-react";
import { getSingleShop } from "@/tools/api";
import { useQuery } from "@tanstack/react-query";
import useActiveStore from "@/hooks/use-active-store";
import { useEffect } from "react";
import DashboardCard from "./components/dashboard/Card";
import RecentOrders from "./components/dashboard/orders/RecentOrders";
import { Heading } from "./components/Heading";
import Overview from "./components/overview";

function Dashboard() {
  const activeStore = useActiveStore()
  const {
    data: shop,
  } = useQuery({
    queryKey: ["getSingleShop", activeStore.storeId],
    queryFn: () => getSingleShop(activeStore.storeId),
    enabled: !!activeStore.storeId,
  });
  useEffect(()=>{
      activeStore.setStoreName(shop?.duka_id)
    },[shop?.duka_id])
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4">
        <Heading title="Dashboard" description="Overview of your store" />
        <hr />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <DashboardCard title="Total Sales" value={45} percentage={1.56} icon={<ShoppingBag size={16} color='#676767'/>} trend={<TrendingUp color='green'/>} insight='Trending up this month' action='Customers love your products 😍' />
        <DashboardCard title='Total Revenue' value={formatter.format(7600)} percentage={12} icon={<Wallet size={16} color='#676767'/>} trend={<TrendingUp color='green'/>} insight='Getting richer by day' action='Your products are in high demand👍' />
        <DashboardCard title='Recent Orders' value={5} percentage={1.1} icon={<FileBox size={16}  color='#676767'/>} trend={<TrendingUp color='green'/>} insight='Steady performance' action='Remember to deliver fast🚀' />
        <DashboardCard title='Total Visitors' value={120} percentage={3.1} icon={<Users size={16} color='#676767'/>} trend={<TrendingDown color='red'/>} insight='Fewer visitors this month' action='Leave a link to your store on social media😉' />
        </div>
        {/* <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview data={[]} />
          </CardContent>
        </Card> */}
        <RecentOrders />
      </div>
    </div>
  )
}

export default Dashboard