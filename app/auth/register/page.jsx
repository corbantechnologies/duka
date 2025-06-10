import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import RoleButtons from './components/RoleButtons'

const Onboarding = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
        <h1 className="text-2xl px-4 text-center md:text-3xl">Join as a buyer or seller</h1>
        <RoleButtons/>
        <p className="text-[#5f5e5e]">
            Already have an account?{" "}
            <Link className="text-primary" href="/auth/login">Log in</Link>
          </p>
    </div>
  )
}

export default Onboarding