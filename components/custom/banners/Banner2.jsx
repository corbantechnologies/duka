import Image from "next/image";

const images = [
  "sofa.jpg",
  "artwork.jpg",
  "accessories.jpg",
  "fashion.jpg",
  "gadgets.jpg",
  "shoes.jpg",
];

function Banner2() {
  return (
    <div className="bg-[#f5f5f5] p-5 rounded-xl">
      <div>
        <h1 className="text-5xl text-center font-bold">
          Best artwork collection
        </h1>
        <p className="text-center text-xl mt-3">
          Discover unique art pieces for your spaces
        </p>
        <div className="flex justify-center mt-5">
        <button className="px-6 py-2 rounded-full text-white bg-primary">
          Explore all
        </button>
        </div>
      </div>
      <div className="flex gap-1 mt-16 overflow-x-auto lg:overflow-hidden">
        <div className="w-[200px] flex-shrink-0 ">
          <img
            src="/sofa.jpg"
            alt="art"
            className=" h-[230px] rounded-xl object-cover"
          />
        </div>
        <div className="w-[200px] mt-16 flex-shrink-0 ">
          <img
            src="/artwork.jpg"
            alt="art"
            className="w-full h-[230px] rounded-xl object-cover"
          />
        </div>
        <div className="w-[200px] mt-10 flex-shrink-0 ">
          <img
            src="/accessories.jpg"
            alt="art"
            className="w-full h-[230px] rounded-xl object-cover"
          />
        </div>
        <div className="w-[200px] flex-shrink-0 ">
          <img
            src="/fashion.jpg"
            alt="art"
            className="w-full h-[230px] rounded-xl object-cover"
          />
        </div>
        <div className="w-[200px] mt-12 flex-shrink-0 ">
          <img
            src="/gadgets.jpg"
            alt="art"
            className="w-full h-[230px] rounded-xl object-cover"
          />
        </div>
        <div className="w-[200px] mt-16 flex-shrink-0 ">
          <img
            src="/shoes.jpg"
            alt="art"
            className=" h-[230px] rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner2;
