"use client";
import { useFetchUser } from "@/hooks/accounts/actions";
import { signOut } from "next-auth/react";
import React from "react";

function Dashboard() {
  const {
    isLoading: isLoadingAccount,
    data: account,
    refetch: refetchAccount,
  } = useFetchUser();

  console.log(account);

  return (
    <div>
      <h1>Hello Customer {account?.first_name}</h1>
      <button
        onClick={() => signOut()}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
