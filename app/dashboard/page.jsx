"use client"
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log('session',session)
  useEffect(()=>{
    if(status !== "authenticated" && status !== "loading"){
      router.push('/')
    }
  },[])

  return (
    <>
      <div>Dashboard</div>
      <h1 className="font-bold">Hello {session?.user?.name}</h1>
      <button onClick={() => signOut({callbackUrl:'/'})} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Logout</button>

    </>

  )
}

export default Dashboard