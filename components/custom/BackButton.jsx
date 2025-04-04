'use client'
import { ChevronLeftCircle } from "lucide-react"
import { useRouter } from "next/navigation"

const BackButton = () => {
    const router = useRouter();
  return (
    <button onClick={()=>router.back()}>
        <ChevronLeftCircle size={20} className="text-gray-800"/>
    </button>
  )
}

export default BackButton