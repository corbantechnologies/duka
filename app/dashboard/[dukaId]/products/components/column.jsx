"use client"

import { CellAction } from "./cell-action"

export const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "discount",
    header: "Discount",
  },
  {
    accessorKey: "discounted_price",
    header: "Final price",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    id: 'actions',
    cell: ({row})=> <CellAction data={row?.original}/>
  }
]
