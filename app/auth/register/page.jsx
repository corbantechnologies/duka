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
    accountType: z.enum(["is_vendor", "is_customer"], {
      required_error: "You need to select a notification type.",
    }),
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

function Register() {
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
      accountType: "",
    },
  });

  async function onSubmit(values) {
    setLoading(true);
    if (!validatePassword(values.password)) return;
    if (
      values.accountType === "is_vendor" ||
      values.accountType === "is_customer"
    ) {
      const accountTypeValue = values.accountType;
      values[accountTypeValue] = true;
      delete values.accountType;
    }
    const newValues = { ...values, avatar: file };
    const formData = new FormData();

    for (const key in newValues) {
      if (newValues.hasOwnProperty(key)) {
        formData.append(key, newValues[key]);
      }
    }
    if(values.accountType === "is_vendor"){
      setLoading(false)
      await signUpVendor(formData)
    }else{
      const res = await signUpCustomer(formData)
      if(res.success){
        setLoading(false)
        toast.success("User successfully created", {
          id: "success",
        });
        console.log(res)
        // router.push("/auth/login");
      }else{
        setLoading(false)
        toast.error("Failed to create account. Please try again later", {
          id: "error",
        });
        console.log(res)
      }
    }
    // await axios
    //   .post('/api/auth/signup/vendor/', formData)
    //   .then(() => {
    //     toast.success("User successfully created", {
    //       id: "success",
    //     });
    //     setLoading(false);
    //     router.push("/auth/login");
    //   })
    //   .catch((err) => {
    //     toast.error("Failed to create account. Please try again later", {
    //       id: "error",
    //     });
    //     console.log(err);
    //     setLoading(false);
    //   });
  }

  return (
    <main className="p-5 h-screen flex flex-col">
      <div>
        <Link href="/" className="flex items-end">
          <Image src="/logo2.png" alt="logo" width={100} height={80} />
        </Link>
      </div>
      <div className="flex-grow py-5 place-content-center overflow-y-auto">
        <h1 className="text-4xl text-center mb-8">Sign up to Duka</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 md:w-[500px] mx-auto"
          >
            <input type="file" onChange={handleFileChange} />
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
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Choose account type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex items-center space-x-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="is_vendor" />
                        </FormControl>
                        <FormLabel className="font-normal">Seller</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="is_customer" />
                        </FormControl>
                        <FormLabel className="font-normal">Buyer</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
    </main>
  );
}

export default Register;
