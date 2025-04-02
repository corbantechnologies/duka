"use client"

import { CellAction } from "./cell-action"

export const columns = [
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "Customer",
    header: "Customer",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    id: 'actions',
    cell: ({row})=> <CellAction data={row?.original}/>
  }
]
