"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import toast from "react-hot-toast";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const redirectUser = async () => {
      const session = await getSession();

      if (session?.user?.data?.is_vendor) {
        router?.replace("/vendors/dashboard");
      } else if (session?.user?.data?.is_customer) {
        router?.replace("/customer/dashboard");
      } else {
        router.replace("/dashboard");
      }
    };

    redirectUser().catch(() => toast.error("Failed to redirect."));
  }, [router]);

  return <p className="text-center">Redirecting...</p>;
}
