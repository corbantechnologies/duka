"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Trash } from "lucide-react";
import { useEffect, useState } from "react";
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
import { useCreateProduct, useDeleteProduct, useUpdateProduct } from "@/lib/react-query/queriesAndMutations";
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
  const [files, setFiles] = useState([]);
  const [initialImages, setInitialImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [deletedImages, setDeletedImages] = useState(new Set());
  const {dukaId, productId} = useParams();
  const router = useRouter();
  const { mutateAsync:createNewProduct, isSuccess, isError } = useCreateProduct();
  const { mutateAsync:updateProduct, isSuccess:updateSuccess, isError:updateError } = useUpdateProduct();
  const { mutateAsync:deleteProduct, isSuccess:deleteSuccess, isError:deleteError } = useDeleteProduct();
  const handleClose = () => setOpen(false);
  const axiosAuth = useAxiosAuth()

  function handleImageChange(e){
    const selectedFiles = e.target.files;
    setFiles(Array.from(selectedFiles));
  }
  useEffect(() => {
    if (files.length < 1) return;
    const newImageUrls = [];
    files.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [files]);
  
  const handleImageDelete = (image) => {
    setDeletedImages((prev) => {
      const newDeletedImages = new Set(prev);
      if (newDeletedImages.has(image)) {
        newDeletedImages.delete(image); 
      } else {
        newDeletedImages.add(image);
      }
      return newDeletedImages;
    });
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
  useEffect(() => {
    if (initialData) {
      setInitialImages(initialData?.images)
      form.reset({
        ...initialData,
        price: parseFloat(String(initialData.price)), 
        features: initialData.features ? initialData.features.join(', ') : '',
        colors: initialData.colors ? initialData.colors.join(', ') : '',
        sizes: initialData.sizes ? initialData.sizes.join(', ') : '',
      });
    }
  }, [initialData, form]);

  const title = initialData ? "Edit Product" : "Create Product";
  const description = initialData ? "Edit a Product" : "Create a Product";
  const action = initialData ? "Save changes" : "Create";
  const toastMessage = initialData ? "Product updated" : "Product created";

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
    const formData = new FormData();
  formData.append('shop', "comfortt");
  formData.append('name', values.name);
  formData.append('description', values.description);
  formData.append('price', values.price);
  formData.append('stock', values.stock);
  formData.append('discount', values.discount);
  formData.append('is_active', values.is_active);
  formData.append('features', JSON.stringify(featuresArray));
  formData.append('colors', JSON.stringify(colorsArray));
  formData.append('sizes', JSON.stringify(sizesArray));
  files.forEach((file) => {
    formData.append('uploaded_images', file);
  });

    try {
      setLoading(true);
      if(initialData){
        // const updatedImages = initialImages.filter((image) => !deletedImages.has(image));
        // updatedImages.forEach((image) => {
        //   formData.append('uploaded_images', image.image);
        // });
        const data = {
          slug:productId,
          values: formData,
          axiosAuth: axiosAuth
      }
        await updateProduct(data);
        if(updateSuccess){
            toast.success(toastMessage, { id: "updatesuccess" })
            router.refresh()
        }
        if(updateError){
            toast.error('Failed to update product. Please try again.')
        }
        
      }else{
        const data = {
          values: formData,
          axiosAuth: axiosAuth
      }
        const result = await createNewProduct(data);
        if(result.success){
            toast.success(toastMessage, { id: "createsuccess" })
            router.replace(`/dashboard/${dukaId}/products`)
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
    const data = {
      slug:productId,
      axiosAuth: axiosAuth
    }
    try {
      setLoading(true);
      const result = await deleteProduct(data);
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
  console.log(initialImages)
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
        {initialData && (
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
                        <input style={{ display: "none" }} type="file" multiple id="file" onChange={handleImageChange}/>
                        <label htmlFor="file" className="cursor-pointer">Choose photo</label>
                        {imageURLs.map((imageSrc, index) => (
                          <img key={index} src={imageSrc} alt="Preview" className='size-10 ml-2 rounded object-cover' />
                        ))}
                        {initialImages ?
                        initialImages?.map((image)=>(
                          <div key={image.id}>
                            <img src={image.image} alt="Preview" className='size-16 ml-2 rounded object-cover' />
                            {/* <button type="button" onClick={() => handleImageDelete(image)}>
                              {deletedImages.has(image) ? 'Undo Delete' : 'Delete'}
                            </button>  */}
                          </div>
                        ))
                        :
                        null
                         }
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
            {loading ? <Loader2 className="animate-spin" /> : `${action}` }
          </Button>
        </form>
      </Form>
    </>
  );
};
