"use client"
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

function Dashboard() {
  const { data: session } = useSession();

  return (
    <>
      <div>Dashboard</div>
      <h1 className="font-bold">Hello {session?.user?.name}</h1>
      <button onClick={() => signOut()} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Logout</button>

    </>

  )
}

export default Dashboard