"use client";

import RegisterForm from "@/app/auth/register/components/RegisterForm";
import { useSearchParams } from "next/navigation";


export default function AccountTypeClient() {
  const searchParams = useSearchParams();
  const accountType = searchParams.get("user");

  return <RegisterForm accountType={accountType} />;
}
