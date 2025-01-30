import { ArrowRight } from "lucide-react"
import Image from "next/image"

function Cta() {
  return (
    <div className="bg-primary text-white mx-4 lg:mx-8 rounded-lg p-8 md:p-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
            <h1 className="text-4xl leading-normal font-semibold">Ready to Boost Your Sales? <br className="hidden md:block" /> Join Us Today!</h1>
            <p>Join a community that cares about your success and watch your business thrive</p>
            <button className="bg-white mt-10 text-black flex items-center gap-5 py-2 px-5 rounded-full">
                Join us now <span className="size-8 grid place-content-center rounded-full bg-primary text-white"> <ArrowRight size={16} /> </span>
            </button>
        </div>
        <div>
            <Image width={500} height={400} src='/account.png' alt="account" className="rounded-xl object-cover w-full" />
        </div>
    </div>
  )
}

export default Cta