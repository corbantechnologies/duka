import { Bell, Info, MoveRight, MoveUpRight, Sparkles } from "lucide-react";
import Image from "next/image"
import Link from "next/link";

function UserDashboard() {
  return (
    <div className="px-4 mb-5">
      <h1 className='text-2xl md:text-3xl font-semibold'>Overview</h1>
      <p className="text-sm text-gray-500">Overview of your activity on Duka</p>
      <section className="grid grid-cols-1 md:grid-cols-3 mt-2 w-full gap-5">
        <div className="border shadow-sm rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-5">Recent Orders</p>
          <p className="text-xl">0</p>
        </div>
        <div className="border shadow-sm rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-5">Total Purchases</p>
          <p className="text-lg">0 Ksh</p>
        </div>
        <div className="border shadow-sm rounded-lg p-4">
          <p className="text-sm text-gray-500 mb-5">Your wish list</p>
          <p className="text-lg">0 Product(s)</p>
        </div>
      </section>
      <section className="mt-5 grid grid-cols-1 md:grid-cols-3 items-start gap-5">
        <div className="border shadow-sm rounded-lg p-4">
           <h2 className="text-xl mb-5">Followed shops</h2>
          {/* <div>
            <ul>
              {followedShops.map((shop)=>(
                <li key={shop.name} className="flex items-center mb-3 justify-between">
                  <div className="flex items-center gap-2">
                  <div className="bg-white overflow-hidden w-10 aspect-square grid place-content-center rounded-full">
                  <img src={shop.img} alt="shop logo" width={40} height={40} className="object-contain rounded-full"/>
                </div>
                <p>{shop.name}</p>
                  </div>
                  <div className="flex items-center gap-3">
                  {shop.new && <div className="relative">
                  <Sparkles size={24}/>
                  <span className="bg-primary px-1 text-white rounded-full absolute -top-2 -left-6 text-xs">New</span>
                  </div>}
                <Link href={shop.link} className="flex items-center gap-2 text-sm">
                  Visit shop
                  <MoveUpRight size={12} />
                  </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div> */}
          <p className="text-gray-500">You have not followed any shop yet!</p>
        </div>
        <div className="border rounded-lg p-4 shadow-sm space-y-3">
          <div className="border rounded-xl shadow-sm w-fit p-2 flex items-center gap-2">
          <Info size={18} strokeWidth={1.5}/>
          <span>Support center</span>
          </div>
          <p className="text-xl">24/7 support team</p>
          <p className="text-gray-500 text-[15px]">Find answers to your questions from our team. Share your concerns or suggestions with us.</p>
          <hr/>
          <Link href='/' className="flex items-center gap-2 text-[15px]">
                Support center
                <MoveRight size={12}/>
                </Link>
        </div>
      </section>
    </div>
  )
}

export default UserDashboard

const followedShops = [
  {
    name: "Comfortt",
   link:'/shop/1',
   new:true,
    img: "https://i.etsystatic.com/11651126/r/il/d76bf6/5753982272/il_600x600.5753982272_41ig.jpg",
  },
  {
    name: "Malliny",
    link:'/shop/1',
    img: "https://i.etsystatic.com/43790300/r/il/15e507/6401998736/il_600x600.6401998736_tv40.jpg",
  },
  {
    name: "Macy's",
    link:'/shop/1',
    img: "https://i.etsystatic.com/54757727/c/1307/1307/345/381/il/0ec30b/6294906136/il_600x600.6294906136_chtg.jpg",
  },
  {
    name: "Converse",
    link:'/shop/1',
    img: "https://i.etsystatic.com/ij/733dca/6586968809/ij_600x600.6586968809_q0zid5sd.jpg?version=0",
  }
];