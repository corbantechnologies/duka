"use client";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Divide, Loader2, Trash, Undo } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { useParams, useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import toast from "react-hot-toast";
import { AlertModal } from "@/components/modals/alert-modal";
import {
  useCreateProduct,
  useDeleteProduct,
  useUpdateProduct,
} from "@/lib/react-query/queriesAndMutations";
import useAxiosAuth from "@/hooks/general/useAxiosAuth";
import { Heading } from "../../../components/Heading";
import { useForm } from "react-hook-form";
import useActiveStore from "@/hooks/use-active-store";

const sizes = [
  {
    id: "n/a",
    label: "N/A",
  },
  {
    id: "XS",
    label: "XS",
  },
  {
    id: "S",
    label: "S",
  },
  {
    id: "M",
    label: "M",
  },
  {
    id: "L",
    label: "L",
  },
  {
    id: "XL",
    label: "XL",
  },
  {
    id: "XXL",
    label: "XXL",
  },
]

const subcategories = [
  {
    id: "Uni-sex",
    label: "Uni-sex",
  },
  {
    id: "Men",
    label: "Men",
  },
  {
    id: "Women",
    label: "Women",
  },
  {
    id: "Children",
    label: "Children",
  }
]

const formSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(2),
  price: z.coerce.number().min(1),
  discount: z.coerce.number().min(1),
  stock: z.coerce.number().min(1),
  is_active: z.boolean().default(false).optional(),
  features: z.string().optional(),
  colors: z.string().optional(),
  sizes: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Select N/A if size is not applicable.",
  }),
  // subcategories: z
  //   .array(z.string())
  //   .optional()
  //   .refine(
  //     (value) => {
  //       if (!value) {
  //         return true;
  //       }
  //       return value.some((item) => item);
  //     }
  //   ),
});

export const ProductForm = ({ initialData }) => {
  //added input for selecting subcategory for product
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [initialImages, setInitialImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  const [deletedImages, setDeletedImages] = useState(new Set());
  const { dukaId, productId } = useParams();
  const router = useRouter();
  const activeStore = useActiveStore();
  const {
    mutateAsync: createNewProduct,
    isError,
  } = useCreateProduct();
  const {
    mutateAsync: updateProduct,
    isSuccess: updateSuccess,
    isError: updateError,
  } = useUpdateProduct();
  const {
    mutateAsync: deleteProduct,
    isSuccess: deleteSuccess,
    isError: deleteError,
  } = useDeleteProduct();
  const handleClose = () => setOpen(false);
  const axiosAuth = useAxiosAuth();

  function handleImageChange(e) {
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

  const handleNewImageDelete = (image) => {
    setImageURLs((prev) => prev.filter((url) => url !== image));
};

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      uploaded_images: [],
      price: 0,
      discount: "",
      stock: "",
      is_active: false,
      features: "",
      colors: "",
      // subcategories: [""],
      sizes: [""],
    },
  });
  useEffect(() => {
    if (initialData) {
      setInitialImages(initialData?.images);
      form.reset({
        ...initialData,
        price: parseFloat(String(initialData.price)),
        features: initialData.features ? initialData?.features?.join(", ") : "",
        colors: initialData.colors ? initialData?.colors?.join(", ") : "",
        // subcategories: initialData.subcategories ? initialData?.subcategories?.join(", ") : "",
        // sizes: initialData.sizes ? initialData?.sizes?.join(", ") : "",
      });
    }
  }, [initialData, form]);

  const title = initialData ? `Edit ${initialData?.name}` : "Create Product";
  const description = initialData ? 'Edit your product' : "Create a Product";
  const action = initialData ? "Save changes" : "Create";
  const toastMessage = initialData ? 'Product updated' : "Product created";

  const parseInputToArray = (input) => {
    if (!input) return [];
    return input
      .split(/[\n,]+/)
      .map((item) => item.trim())
      .filter((item) => item);
  };
  async function onSubmit(values) {
    const featuresArray = parseInputToArray(values.features);
    const colorsArray = parseInputToArray(values.colors);
    const formData = new FormData();
    formData.append("shop", activeStore.storeName);
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("stock", values.stock);
    formData.append("discount", values.discount);
    formData.append("is_active", values.is_active);
    formData.append("features", JSON.stringify(featuresArray));
    formData.append("colors", JSON.stringify(colorsArray));
    formData.append("sizes", JSON.stringify(values.sizes));
    files.forEach((file) => {
      formData.append("uploaded_images", file);
    });
    // values.subcategories.forEach((cat)=>{
    //   if(cat){
    //     formData.append('subcategories', cat)
    //   }
    // })
    console.log(formData)
    // return;
    try {
      setLoading(true);
      if (initialData) {
        // const updatedImages = initialImages.filter((image) => !deletedImages.has(image));
        // updatedImages.forEach((image) => {
        //   formData.append('uploaded_images', image.image);
        // });
        const data = {
          slug: productId,
          values: formData,
          axiosAuth: axiosAuth,
        };
        await updateProduct(data);
        if (updateSuccess) {
          toast.success(toastMessage, { id: "updatesuccess" });
          router.replace(`/dashboard/${dukaId}/products`);
        }
        if (updateError) {
          toast.error("Failed to update product. Please try again.");
        }
      } else {
        const data = {
          values: formData,
          axiosAuth: axiosAuth,
        };
        const result = await createNewProduct(data);
        if (result.success) {
          toast.success(toastMessage, { id: "createsuccess" });
          router.replace(`/dashboard/${dukaId}/products`);
        }else{
          toast.error("Failed to create product. Please try again.");
        }
        if (isError) {
          toast.error("Failed to create product. Please try again.");
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
      slug: productId,
      axiosAuth: axiosAuth,
    };
    try {
      setLoading(true);
      const result = await deleteProduct(data);
      if (result.success) {
        toast.success("Product deleted", { id: "deletesuccess" });
        router.replace(`/dashboard/${dukaId}/products`);
      }
      if (deleteError) {
        toast.error("Failed to delete product. Please try again.");
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
          <div>
          <p>Product image</p>
          <div className="flex flex-wrap my-5 gap-5">
            {initialImages
              ? initialImages?.map((image) => (
                  <div key={image.id} className="flex-shrink-0 rounded-2xl relative">
                    <img
                      src={image.image}
                      alt="Preview"
                      className="size-32 lg:size-48 ml-2 rounded object-cover"
                    />
                    <button type="button" className="absolute size-6 lg:size-8 grid place-content-center rounded-full bg-red-500 top-0 -right-[10px]" onClick={() => handleImageDelete(image)}>
                      {deletedImages.has(image) ? <Undo className="size-3 lg:size-4" color='white' /> : <Trash className="size-3 lg:size-4" color='white' /> }
                    </button> 
                  </div>
                ))
              : null}
            </div>
          <div className="flex flex-col gap-2 items-center">
            <input
              style={{ display: "none" }}
              type="file"
              multiple
              id="avatar"
              onChange={handleImageChange}
            />
            <label
              htmlFor="avatar"
              className="bg-blue-50 mt-2 border border-primary cursor-pointer border-dashed rounded-xl w-full p-6 grid place-content-center"
            >
              <div className="flex justify-center">
                <img
                  src="/image-placeholder.svg"
                  alt="placeholder"
                  className="w-12"
                />
              </div>
              <p className="text-sm">Click to upload a new product image</p>
            </label>
            <div className="flex flex-wrap mt-5 gap-5">
            {imageURLs.map((imageSrc, index) => (
              <div  key={index} className="relative rounded-xl flex-shrink-0">
                <img
                  src={imageSrc}
                  alt="Preview"
                  className="size-40 ml-2 rounded-xl object-cover"
                />
                <button type="button" className="absolute size-8 grid place-content-center rounded-full bg-blue-100 top-0 -right-[10px]" onClick={() => handleNewImageDelete(imageSrc)}>
                  <Trash size={16} />
                </button> 
              </div>
            ))}
            </div>
          </div>
          </div>
          <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      className='placeholder:text-sm'
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
                      placeholder="My product is awesome!"
                      className='placeholder:text-sm'
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
                  <FormLabel>Features</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      className='placeholder:text-sm'
                      placeholder="Perfect quality, Durable, ..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             {/* <FormField
                       control={form.control}
                       name="subcategories"
                       render={() => (
                         <FormItem>
                           <div className="mb-4">
                             <FormLabel className="text-base">Sub-categories</FormLabel>
                             <FormDescription>
                               Products require at least one sub-category.
                             </FormDescription>
                           </div>
                           {subcategories.map((subcategoy) => (
                             <FormField
                               key={subcategoy.id}
                               control={form.control}
                               name="subcategories"
                               render={({ field }) => {
                                 return (
                                   <FormItem
                                     key={subcategoy.id}
                                     className="flex flex-row items-start space-x-3 space-y-0"
                                   >
                                     <FormControl>
                                       <Checkbox
                                         checked={field.value?.includes(subcategoy.id)}
                                         onCheckedChange={(checked) => {
                                           return checked
                                             ? field.onChange([...field.value, subcategoy.id])
                                             : field.onChange(
                                                 field.value?.filter(
                                                   (value) => value !== subcategoy.id
                                                 )
                                               )
                                         }}
                                       />
                                     </FormControl>
                                     <FormLabel className="font-normal">
                                       {subcategoy.label}
                                     </FormLabel>
                                   </FormItem>
                                 )
                               }}
                             />
                           ))}
                           <FormMessage />
                         </FormItem>
                       )}
                     /> */}
            <div className="">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input disabled={loading} type="number" {...field} />
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
                    <FormLabel>Discount % <span className="text-sm text-gray-500">(Optional)</span> </FormLabel>
                    <FormControl>
                      <Input disabled={loading} type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="colors"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Colors{" "}
                    <span className="text-gray-500 text-sm">(Optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      className="placeholder:text-sm"
                      placeholder="Red, Green, Blue"
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
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel className="text-base">Sizes</FormLabel>
                            <FormDescription>
                              Select the sizes applicable for this product.
                            </FormDescription>
                          </div>
                          {sizes.map((size) => (
                            <FormField
                              key={size.id}
                              control={form.control}
                              name="sizes"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={size.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(size.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, size.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== size.id
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {size.label}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
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
                      <Input disabled={loading} type="number" {...field} />
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
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Select if product is available?</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
          </div>
          <Button disabled={loading} type="submit">
            {loading ? <Loader2 className="animate-spin" /> : `${action}`}
          </Button>
        </form>
      </Form>
    </>
  );
};
