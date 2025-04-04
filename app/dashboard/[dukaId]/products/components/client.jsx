"use client";

import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { columns } from "./column";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "../../components/Heading";
import Link from "next/link";

export const ProductClient = ({ data }) => {
  const {dukaId} = useParams()
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data?.length})`}
          description="Manage products for your store"
        />
        <Button asChild className='cursor-pointer'>
          <Link href={`/dashboard/${dukaId}/products/new`}>+ Add </Link>
        </Button>
      </div>
      <hr />
      <div>
        <DataTable searchKey="name" columns={columns} data={data}/>
      </div>
    </>
  );
};