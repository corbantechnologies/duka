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
import { getCategories } from "@/tools/api";
import { useQuery } from "@tanstack/react-query";
import { Textarea } from "@/components/ui/textarea";
import useAxiosAuth from "@/hooks/general/useAxiosAuth";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import { Heading } from "../../components/Heading";

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
 
  async function onSubmit(values) {
    const data = {
        values: values,
        axiosAuth: axiosAuth
    }
    await createNewStore(data);
    if(isSuccess){
        toast.success('Shop created successfully')
    }
    if(isError){
        toast.error('Failed to create shop. Please try again.')
    }
  }
  return (
    <div>
        <div className='mb-4'>
     <Heading title="Create your shop" description="Create your shop and start selling on duka today" />
    <hr className="mt-4"/>
        </div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-5 gap-y-8">
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category for your shop" />
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
              <FormControl>
                <Input placeholder="Your country" {...field} />
              </FormControl>
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
              <FormControl>
                <Input placeholder="Your currency" {...field} />
              </FormControl>
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
              <FormControl>
                <Input placeholder="Your language" {...field} />
              </FormControl>
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
        <Button type="submit" disabled={isPending}>{isPending ? <Loader2 className="animate-spin"/> : 'Submit'}</Button>
      </form>
    </Form>
    </div>
  )
}

