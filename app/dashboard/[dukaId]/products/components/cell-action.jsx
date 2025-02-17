"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { AlertModal } from "@/components/modals/alert-modal";
import toast from "react-hot-toast";
import Link from "next/link";
import { useDeleteProduct } from "@/lib/react-query/queriesAndMutations";
import useAxiosAuth from "@/hooks/general/useAxiosAuth";

export const CellAction = ({ data }) => {
    const router = useRouter();
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const axiosAuth = useAxiosAuth()
    const { mutateAsync:deleteProduct, isError:deleteError } = useDeleteProduct();
    const onCopy = (id) => {
        navigator.clipboard.writeText(id);
        toast.success("ID copied to clipboard");
      };
      const onDelete = async () => {
        const values = {
          slug:data.slug,
          axiosAuth: axiosAuth
        }
        try {
          setLoading(true);
          const result = await deleteProduct(values);
          if(result.success){
              toast.success('Product deleted', { id: "deletesuccess" })
          }
          if(deleteError){
              toast.error('Failed to delete product. Please try again.')
          }
        } catch (error) {
          toast.error("Something went wrong.", {
            id: "errordeleting",
          });
        } finally {
          setLoading(false);
          setOpen(false);
        }
      };
  return (
    <>
    <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className="size-8 p-0"> 
            <span className="sr-only">Open menu</span> 
            <MoreHorizontal className="size-4"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={()=>onCopy(data.id)}>
            <Copy className="mr-2 size-4"/>
            Copy Id
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/dashboard/${params.dukaId}/products/${data?.slug}`} className="flex items-center gap-2">
            <Edit className="mr-2 size-4"/>
            Update
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=>setOpen(true)}>
            <Trash className="mr-2 size-4"/>
            Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    </>
  );
};
