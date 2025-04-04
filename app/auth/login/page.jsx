
import Link from "next/link"
import Image from "next/image"
import Login from "./components/login-form"
import { VerticalMarquee } from "@/components/custom/VerticalMarquee"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-4 md:p-6">
        <div className="flex justify-center gap-2 md:justify-start">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/logo2.png" alt="logo" width={100} height={80} />
        </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Login/>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <VerticalMarquee/>
      </div>
    </div>
  )
}

