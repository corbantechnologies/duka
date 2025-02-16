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

export const CellAction = ({ data }) => {
    const router = useRouter();
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const onCopy = (id) => {
        navigator.clipboard.writeText(id);
        toast.success("ID copied to clipboard");
      };
      const onDelete = async () => {
        try {
          setLoading(true);
          await axios.delete(`/api/${params.storeId}/products/${data.id}`);
          router.refresh();
          toast.success("Product deleted.", { id: "success" });
        } catch (error) {
          toast.error("Something went wrong", {
            id: "error",
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
          <Link href={`/dashboard/${params.dukaId}/products/${data?.slug}`}>
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
