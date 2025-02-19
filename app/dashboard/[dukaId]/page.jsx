'use client';

import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { formatter } from "@/lib/utils";
import { CreditCard, Package } from "lucide-react";
import { Heading } from "./components/Heading";
import { useParams } from "next/navigation";
import { getSingleShop } from "@/tools/api";
import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "@/hooks/general/useAxiosAuth";

function Dashboard() {
  const {dukaId} = useParams();
  const axiosAuth = useAxiosAuth()
  const {
    data: shop,
  } = useQuery({
    queryKey: ["getSingleShop", dukaId],
    queryFn: () => getSingleShop(dukaId,axiosAuth),
    enabled: !!dukaId,
  });
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-6 pt-4">
        <Heading title="Dashboard" description="Overview of your store" />
        <hr />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Card className='shadow-md p-4 rounded-lg'>
            <CardHeader className="flex pl-0 flex-row items-center justify-between space-y-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold">
                {formatter.format(7600)}
              </div>
            </CardContent>
          </Card>
          <Card className='shadow-md p-4 rounded-lg'>
            <CardHeader className="flex pl-0 flex-row items-center justify-between space-y-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold">
                +40
              </div>
            </CardContent>
          </Card>
          <Card className='shadow-md p-4 rounded-lg'>
            <CardHeader className="flex pl-0 flex-row items-center justify-between space-y-2">
              <CardTitle className="text-sm font-medium">Products In Stock</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-2xl md:text-3xl font-bold">
                45
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            {/* <Overview data={graphRevenue} /> */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard