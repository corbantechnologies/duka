"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { columns } from "./column";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "../../components/Heading";

export const ProductClient = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data?.length})`}
          description="Manage products for your store"
        />
        <Button onClick={() => router.push(`/dashboard/products/new`)}>
          + Add New
        </Button>
      </div>
      <hr />
      <div>
        <DataTable searchKey="name" columns={columns} data={data}/>
      </div>
    </>
  );
};