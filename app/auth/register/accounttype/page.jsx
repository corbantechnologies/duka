import AccountTypeClient from "@/components/auth/AccountTypeClient";
import { Suspense } from "react";

export default function AccountTypePage() {
  return (
    <div>
      <h1>Register</h1>
      <Suspense fallback={<div>Loading form...</div>}>
        <AccountTypeClient />
      </Suspense>
    </div>
  );
}
