"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const redirectUser = async () => {
        router.replace("/dashboard");
    };

    redirectUser().catch(() => toast.error("Failed to redirect."));
  }, [router]);

  return <p className="text-center">Redirecting...</p>;
}
