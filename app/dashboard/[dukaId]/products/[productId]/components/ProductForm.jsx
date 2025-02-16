"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import toast from "react-hot-toast";
import { AlertModal } from "@/components/modals/alert-modal";
import { useCreateProduct } from "@/lib/react-query/queriesAndMutations";
import useAxiosAuth from "@/hooks/general/useAxiosAuth";
import { Heading } from "../../../components/Heading";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(2),
  price: z.coerce.number().min(1),
  discount: z.coerce.number().min(1),
  stock: z.coerce.number().min(1),
  is_active: z.boolean().default(false).optional(),
  features: z.string().optional(),
  colors: z.string().optional(),
  sizes: z.string().optional(),
});

export const ProductForm = ({
  categories,
  initialData,
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState('');
    const [filePreview, setFilePreview] = useState(null);
  const params = useParams();
  const router = useRouter();
  const { mutateAsync:createNewProduct, isPending, isSuccess, isError } = useCreateProduct();
  const handleClose = () => setOpen(false);
  const axiosAuth = useAxiosAuth()

  function handleAvatarChange(e){
    setFile(e.target.files[0])
    setFilePreview(URL.createObjectURL(e.target.files[0]))
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialData?.length > 0 ? {
      ...initialData,
      price: parseFloat(String(initialData?.price)),
    } : {
      name: "",
      description:"",
      uploaded_images: [],
      price: 0,
      discount: "",
      stock: "",
      is_active: false,
      features:"",
      colors:"",
      sizes:"",
    },
  });

  const title = initialData?.length > 0 ? "Edit Product" : "Create Product";
  const description = initialData?.length > 0 ? "Edit a Product" : "Create a Product";
  const action = initialData?.length > 0 ? "Save changes" : "Create";
  const toastMessage = initialData?.length > 0 ? "Product updated" : "Product created";

  const parseInputToArray = (input) => {
    if(!input) return [];
    return input
      .split(/[\n,]+/)
      .map(item => item.trim())
      .filter(item => item);
  };

  async function onSubmit(values) {
    const featuresArray = parseInputToArray(values.features);
    const colorsArray = parseInputToArray(values.colors);
    const sizesArray = parseInputToArray(values.sizes);
    const newValues ={...values, features:featuresArray, colors:colorsArray, sizes:sizesArray, uploaded_images:file, shop:"comfortt"} 

    try {
      setLoading(true);
      if(initialData.length > 0){
        axios.patch(`/api/${params.storeId}/products/${params.productId}`, values)
        .then(()=>{
          router.refresh();
          router.push(`/${params.storeId}/products`)
          toast.success(toastMessage, { id: "success" });
        })
      }else{
        const data = {
          values: newValues,
          axiosAuth: axiosAuth
      }
        await createNewProduct(data);
        if(isSuccess){
            toast.success('Product created successfully')
        }
        if(isError){
            toast.error('Failed to create product. Please try again.')
        }
      }
    } catch (error) {
      toast.error("Something went wrong", { id: "error" });
    } finally {
      setLoading(false);
    }
  }
  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
      router.refresh();
      router.push(`/${params.storeId}/products`);
      toast.success("Product deleted.", { id: "success" });
    } catch (error) {
      toast.error("Something went wrong.", {
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
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData?.length > 0 && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="size-4" />
          </Button>
        )}
      </div>
      <hr />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <div className='flex items-center'>
                        <input style={{ display: "none" }} type="file" id="file" onChange={handleAvatarChange}/>
                        <label htmlFor="file" className="cursor-pointer">Choose photo</label>
                        {filePreview !== null && <img src={filePreview} alt="Preview" className='size-10 ml-2 rounded-full object-cover' /> }
                    </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Product name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                    disabled={loading}
                    placeholder="Product description"
                    {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="features"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feature</FormLabel>
                  <FormControl>
                    <Textarea
                    disabled={loading}
                    placeholder="Product features"
                    {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      type='number'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      type='number'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="colors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Colors</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sizes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sizes</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="is_active"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                    checked={field.value}
                    // @ts-ignore
                    onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Available?</FormLabel>
                    <FormDescription>This product will appear on the home page</FormDescription>
                  </div>
                </FormItem>
              )}
            />
           
          </div>
          <Button disabled={loading} type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
