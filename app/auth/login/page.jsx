"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { getSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = formValues;
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      const session = await getSession();
      console.log(res);
      if (res.error) {
        toast.error("Invalid credentials");
        setLoading(false);
      } else {
        setLoading(false);
        toast.success("Login successful");
        router?.push("/dashboard");
      }
    } catch (error) {
      setLoading(false);
      toast.error("An error occured while signin in. Please try again!");
    }
  };

  const handleLoginWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signIn("google", { callbackUrl: "/auth/callback" });
    } catch (error) {
      toast.error("Google sign-in failed. Please try again.");
    }
  };


  return (
    <main className="py-4 h-screen bg-primaryLight flex flex-col">
      <div className="px-4">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/logo2.png" alt="logo" width={100} height={80} />
        </Link>
      </div>
      <div className="flex-grow py-4 mx-4 place-content-center md:w-[540px] md:mx-auto">
        <div className="bg-white rounded-lg p-6">
          <div className="mb-6 pl-2">
          <h1 className="text-2xl font-semibold">Login to Duka</h1>
          <span className="text-[#676767] text-sm">Enter your email & password to login</span>
          </div>
          {/* <div className="flex justify-center">
            <button
              className="flex items-center gap-2 border rounded-full py-3 px-8"
              onClick={handleLoginWithGoogle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>{" "}
              Sign in with Google
            </button>
          </div>
          <span className="flex my-5 items-center">
            <span className="border-b mx-2 mt-1 w-full"></span>
            <span>or</span>
            <span className="border-b mx-2 mt-1 w-full"></span>
        </span> */}
            <form onSubmit={handleLogin} className="space-y-8 px-2">
                <div className="flex flex-col gap-2">
                    <Label htmlFor='email' className="text-base">Email address <sup className="text-red-500">*</sup> </Label>
                    <Input id='email' name='email' type='email' className="h-12 rounded-xl" placeholder="Enter your email address" onChange={handleChange} />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor='password' className="text-base">Password <sup className="text-red-500">*</sup> </Label>
                    <Input id='password' name='password' type='password' className="h-12 rounded-xl" placeholder="Enter your password" onChange={handleChange} />
                </div>
                <div className="flex justify-end">
                  <Link href="#" className="text-sm text-primary">Forgot password?</Link>
                </div>
                
                <Button disabled={loading} className='w-full text-base' >{loading ? <Loader2 className="animate-spin" /> : "Login"}</Button>
               
            </form>
            <div className="flex justify-center mt-5">
              <div className="flex items-center gap-2">
              <span className="text-[#9c9c9c] text-sm">Don't have an account?</span>
              <Link href="/auth/register" className="text-sm text-primary">Register now</Link>
              </div>
            </div>
            </div>
        </div>
        </main>
  )
}

export default Login;
