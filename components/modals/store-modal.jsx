"use client";

import { z } from "zod";
import axios from 'axios';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Modal } from "./Modal";
import { useStoreModal } from "@/hooks/useStoreModal";

const formSchema = z.object({
  name: z.string().min(2).max(50),
});

export const StoreModal = () => {
  const storeModal = useStoreModal();
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  async function onSubmit(values) {
    console.log(values)
    // try {
    //   setLoading(true);
    //   const {data} = await axios.post('/api/stores', values);
    //   window.location.assign(`/${data.id}`);
    // } catch (error) {
    //   toast.error('Something went wrong', {id:'error'})
    // }finally{
    //   setLoading(false);
    // }
  }
  return (
    <Modal
      title="Create store"
      description="Add a new store to manage your products"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="Your store name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-2 justify-end ">
          <Button disabled={loading} type="button" variant='outline' onClick={storeModal.onClose}>Cancel</Button>
          <Button disabled={loading} type="submit">Continue</Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};
