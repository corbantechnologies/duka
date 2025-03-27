"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import toast from "react-hot-toast"

const sizes = [
  {
    id: "N/A",
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

const FormSchema = z.object({
  sizes: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Select N/A if size is not applicable.",
  }),
})

export function CheckboxReactHookFormMultiple() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      sizes: ["N/A"],
    },
  })

  function onSubmit(data) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
