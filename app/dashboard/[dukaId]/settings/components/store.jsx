"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useCreateStore } from "@/lib/react-query/queriesAndMutations";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { getCategories, getSingleShop } from "@/tools/api";
import { useQuery } from "@tanstack/react-query";
import { Textarea } from "@/components/ui/textarea";
import useAxiosAuth from "@/hooks/general/useAxiosAuth";
import toast from "react-hot-toast";
import { Loader2, Router } from "lucide-react";
import { Heading } from "@/app/dashboard/[dukaId]/components/Heading";
import useActiveStore from "@/hooks/use-active-store";
import { useEffect } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {message: "Number must be at 10 characters."}).max(10),
  email: z.string().email("Invalid email format"),
  country: z.string().min(2),
  category: z.string().min(2),
  currency: z.string().min(3),
  language: z.string().min(2),
  description: z.string().min(10),
})

export default function CreateStore() {
  const { mutateAsync:createNewStore, isPending, isSuccess, isError } = useCreateStore();
  const activeStore = useActiveStore()
  const {
    data: shop,
  } = useQuery({
    queryKey: ["getSingleShop", activeStore.storeId],
    queryFn: () => getSingleShop(activeStore.storeId),
    enabled: !!activeStore.storeId,
  });
  const {
    data: categories,
  } = useQuery({
    queryKey: ["getCategories"],
    queryFn: () => getCategories(),
  });
  const axiosAuth = useAxiosAuth();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      name:"",
      phone:"",
      email:"",
      country:"",
      currency:"",
      language:"",
      description:"",
    },
  })
  useEffect(() => {
    if (shop) {
      form.reset({
        ...shop
      });
    }
  }, [shop, form]);

  const title = shop ? `Edit Store - ${shop?.name}` : "Create Store";
  const description = shop ? `Edit ${shop?.name}` : "Create a Store";
  const action = shop ? "Save changes" : "Create Store";
  const toastSuccess = shop ? 'Store updated successfully' : "Store created successfully";
  const toastError = shop ? 'Failed to update store. Please try again.' : 'Failed to create store. Please try again.';

  async function onSubmit(values) {
    const data = {
        values: values,
        axiosAuth: axiosAuth
    }
    if(shop){
      await updateStore(data);
    }else{
      await createNewStore(data);
    }
    if(isSuccess){
        toast.success(toastSuccess)
    }
    if(isError){
        toast.error(toastError)
    }
  }
  return (
    <div>
        <div className='mb-4'>
     <Heading title={title} description={description} />
    <hr className="mt-4"/>
        </div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shop name</FormLabel>
              <FormControl>
                <Input placeholder="Shop name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type='email' placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category for your shop" className="placeholder:text-muted-foreground" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories?.map((category)=>(
                  <SelectItem key={category.slug} value={category.name}>{category.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Kenya">Kenya</SelectItem>
                  <SelectItem value="Uganda">Uganda</SelectItem>
                  <SelectItem value="Nigeria">Nigeria</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Currency</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your currency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="KSH">KSH</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="NGR">NGR</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Language</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your language" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Kiswahili">Kiswahili</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Your store description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>{isPending ? <Loader2 className="animate-spin"/> : action}</Button>
      </form>
    </Form>
    </div>
  )
}

