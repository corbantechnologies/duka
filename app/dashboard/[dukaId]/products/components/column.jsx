"use client"

import { CellAction } from "./cell-action"

export const columns = [
  {
    accessorKey: "image",
    header: "Product",
    cell: ({ row }) => (
      <img
        src={row.original?.image}
        alt={`Product image for ${row.original?.name}`}
        style={{ maxWidth: '50px', maxHeight: '50px' }}
      />
    ),
  },
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
