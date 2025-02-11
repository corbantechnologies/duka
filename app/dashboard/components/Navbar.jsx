import { Button } from "@/components/ui/button"
import { Menu, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function Navbar() {
  return (
    <nav className="flex items-center w-full justify-between">
            <div className="flex gap-x-3 items-center font-semibold">
                <Menu className="size-6"/>
                <Image src='/logo2.png' alt='logo' width={100} height={80} />
            </div>
            <div className="hidden gap-x-10 items-center lg:flex">
                <Link href='/' className="py-2 px-4 rounded-full bg-primary font-semibold hover:bg-primary/80">Home</Link>
                <Link href='/'>Pricing</Link>
                <Link href='/'>Contact</Link>
            </div>
            <Link href='/auth/login'>
                <Button className="flex gap-x-3">
                    <User fill="#000"/>Login
                </Button>
            </Link>
            </nav>
  )
}

export default Navbar