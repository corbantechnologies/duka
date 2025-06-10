"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { signUpCustomer, signUpVendor } from "@/tools/api";

const formSchema = z
  .object({
    first_name: z
      .string({ required_error: "Please enter your first name." })
      .min(2, {
        message: "First name must be at least 2 characters.",
      }),
    last_name: z
      .string({ required_error: "Please enter your last name." })
      .min(2, {
        message: "Last name must be at least 2 characters.",
      }),
    email: z
      .string({ required_error: "Please enter your email address." })
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    phone: z
      .string({ required_error: "Please enter your phone number." })
      .min(4),
    password: z.string({ required_error: "Please enter a password." }).min(4),
    confirm: z.string().min(4),
    // agreement: z.boolean(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

function RegisterForm({accountType}) {
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const router = useRouter();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFilePreview(URL.createObjectURL(e.target.files[0]));
  };

  const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,24}$/;
  const validatePassword = (password) => {
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least one character, one digit, one uppercase letter, and be at least 6 characters long"
      );
      setTimeout(() => {
        setPasswordError('');
      }, 8000);
      return false;
    } else {
        setPasswordError('');
      return true;
    }
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      confirm: "",
      // agreement:false,
    },
  });

  async function onSubmit(values) {
    console.log(values)
    setLoading(true);
    if (!validatePassword(values.password)) return;
    const newValues = { ...values, avatar: file, accountType:accountType };
    const formData = new FormData();

    for (const key in newValues) {
      if (newValues.hasOwnProperty(key)) {
        formData.append(key, newValues[key]);
      }
    }
    if(accountType === 'seller'){
      await signUpVendor(formData)
      setLoading(false)
    }else if (accountType === 'buyer'){
      const res = await signUpCustomer(formData)
      if(res.success){
        setLoading(false)
        toast.success("User successfully created", {
          id: "success",
        });
        router.push("/auth/login");
      }else{
        setLoading(false)
        toast.error("Failed to create account. Please try again later", {
          id: "error",
        });
      }
    }
  }

  return (
      <div className=" md:w-[700px] mx-auto place-content-center overflow-y-auto">
        <h1 className="text-2xl md:text-3xl text-center font-semibold ">Get Started Now</h1>
        <p className="mb-5 text-[#5f5f5f] text-center">Enter your credentials to create account</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 px-4"
          >
            <div className="flex items-center gap-5">
            <input
              style={{ display: "none" }}
              type="file"
              multiple
              id="avatar"
              onChange={handleFileChange}
            />
            <label
              htmlFor="avatar"
              className="flex gap-5 items-center"
            >
              <div className={`bg-blue-50 border overflow-hidden border-primary cursor-pointer ${filePreview !==null ? "":'border-dashed'} rounded-full size-20 grid place-content-center`}>
              {filePreview !== null ? (
                <img
                src={filePreview}
                alt="Preview"
                className="size-20 object-cover"
              />
            ) : (
                <img
                  src="/image-placeholder.svg"
                  alt="placeholder"
                  className="w-16"
                />
            )}
              </div>
            <div>
              <p className="border mb-1 px-3 py-1 rounded-md w-fit">Upload image</p>
              <p className="text-sm text-[#5f5f5f]">.png, .jpeg files up to 8MB. Recommended size is 256x256px.</p>
            </div>
            </label>
          </div>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <div className="flex gap-3">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} required type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input {...field} required type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {passwordError && <p className="bg-red-50 text-red-500 border border-red-500 p-2 rounded-lg text-sm">{passwordError}</p> }
            {/* <FormField
          control={form.control}
          name="agreement"
          render={({ field }) => (
            <FormItem className='flex gap-2 items-start'>
              <FormControl>
                <Input {...field} className='w-fit' required type='checkbox' />
              </FormControl>
              <FormLabel className='text-base'>I have read and agree to the Duka Terms of Service including the User Agreement and Privacy Policy</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        /> */}
            <div className="flex flex-col gap-3 items-center">
              <Button disabled={loading} type="submit">
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Create my account"
                )}
              </Button>
              <Link href="/auth/login" className="block">
                Already have an account?{" "}
                <span className="text-primary">Login</span>
              </Link>
            </div>
          </form>
        </Form>
      </div>
  );
}

export default RegisterForm;
