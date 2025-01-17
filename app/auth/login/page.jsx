"use client"
import React, { useState } from 'react'
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

function Login() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Trigger the Google sign-in using NextAuth
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Error during login", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='container px-4 mx-auto flex justify-center my-auto items-center py-12'>
      
      <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login with Google</button>
    </div>
  )
}

export default Login