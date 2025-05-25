import Image from "next/image"
import Link from "next/link"

const RegisterLayout = ({children}) => {
  return (
    <div className=" flex flex-col py-4 px-4 md:px-8">
        <Link href="/" className="flex items-end">
          <Image src="/logo2.png" alt="logo" width={100} height={80} />
        </Link>
        <div className="flex-grow mt-10">{children}</div>
    </div>
  )
}

export default RegisterLayout