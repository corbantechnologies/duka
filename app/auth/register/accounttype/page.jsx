'use client';

import { useSearchParams } from "next/navigation";
import RegisterForm from "../components/RegisterForm";

const AccountType = () => {
    const searchParams = useSearchParams()
 
  const accountType = searchParams.get('user')
  return (
    <div>
        <RegisterForm accountType={accountType} />
    </div>
  )
}

export default AccountType