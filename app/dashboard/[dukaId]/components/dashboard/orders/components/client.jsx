"use client";

import { useParams } from "next/navigation";
import { columns } from "./column";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "../../../Heading";

export const ProductClient = ({ data }) => {
  const {dukaId} = useParams()
  return (
    <>
        <Heading
          title={`Recent orders (${data?.length})`}
          description="Overview of recent orders"
        />
      <hr />
      <div>
        <DataTable searchKey="name" columns={columns} data={data}/>
      </div>
    </>
  );
};