import { MoveUpRight } from "lucide-react";
import Image from "next/image";

function Banner1() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:h-[450px]">
        <div className="w-full relative rounded-lg md:rounded-r-none md:rounded-l-lg overflow-hidden h-[250px] md:h-full">
          <Image
            src="/furniture-banner.jpg"
            alt="furniture banner"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          <ul className="absolute top-5 left-5 flex flex-wrap gap-2 md:justify-center">
            <li className="rounded-full text-xs px-3 py-1 bg-white">
              Modern Minimalism
            </li>
            <li className="text-[#e0e0e0] bg-black/20 px-3 py-1 rounded-full backdrop-blur-xl text-xs">
              Sleek Home Interiors
            </li>
            <li className="text-[#e0e0e0] bg-black/20 px-3 py-1 rounded-full backdrop-blur-xl text-xs">
              Chic simplicity
            </li>
            <li className="text-[#e0e0e0] bg-black/20 px-3 py-1 rounded-full backdrop-blur-xl text-xs">
              Effortless Style
            </li>
          </ul>
          <div className="hidden md:block absolute bg-black/20 backdrop-blur-sm p-6 rounded-xl bottom-5 left-5">
            <p className="text-white text-2xl">PureSpace Luxe Recliner</p>
            <p className="text-sm text-[#e0e0e0]">
              Sleek, elegant, comfort for your modern living space.
            </p>
            <button className="bg-white px-3 mt-3 rounded-full text-xs py-1">
              #furniture
            </button>
          </div>
        </div>
        <div className="hidden md:bg-[#f5f5f5] md:p-6 md:flex flex-col justify-between space-y-3 md:space-y-5 place-content-center rounded-b-lg md:rounded-l-none md:rounded-r-lg text-black">
          <p className="text-xl mt-3 md:mt-0 md:text-3xl">
            Discover the Essesnce of Minimalistic Furniture, Design & Style
          </p>
          <ul className="flex flex-wrap gap-2 md:justify-center">
            <li className="rounded-full text-xs px-3 py-1 border border-black">
              Exclusive
            </li>
            <li className="text-gray-500 px-3 py-1 rounded-full border text-xs border-gray-300">
              Limited Edition
            </li>
            <li className="text-gray-500 px-3 py-1 rounded-full border text-xs border-gray-300">
              Hot Picks
            </li>
            <li className="text-gray-500 px-3 py-1 rounded-full border text-xs border-gray-300">
              Must-Have
            </li>
          </ul>
          <div className="bg-white rounded-xl md:p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-3 md:mt-0">
              <div className="flex flex-col justify-between">
                <p className="bg-gray-200 w-fit rounded-full px-3 py-1 text-xs mb-2 md:mb-0">
                  Exclusive
                </p>
                <div>
                  <p>PureSpace Focus Duo</p>
                  <p className="text-gray-500 text-sm">
                    Sleek, minimalistic design for ultimate productivity and
                    comfort
                  </p>
                </div>
                <button className="bg-gray-200 size-8 grid place-content-center rounded-full">
                  <MoveUpRight size={18} />
                </button>
              </div>
              <div className="h-[180px] rounded-xl overflow-hidden">
                <img
                  src="/furniture-banner-2.jpg"
                  alt="furniture banner"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center">
        <h2 className="text-xl md:text-3xl my-5 md:my-0 md:w-1/2">Explore Furniture collections</h2>
        <ul className="flex-grow grid grid-cols-2 md:flex gap-3">
          <li className="flex-grow text-center p-6 border rounded-xl">Chairs</li>
          <li className="flex-grow text-center p-6 border rounded-xl">Sofas</li>
          <li className="flex-grow text-center p-6 border rounded-xl">Beds</li>
          <li className="flex-grow text-center p-6 border rounded-xl">Tables</li>
        </ul>
      </div>
    </div>
  );
}

export default Banner1;
