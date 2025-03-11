import Image from "next/image";

function Banner3() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:h-[450px]">
      <div className="relative">
        <h2 className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-8xl -z-10 font-bold">
          TIMELESS
        </h2>
        <div className="w-[400px] mx-auto rounded-t-lg md:rounded-r-none md:rounded-l-lg overflow-hidden h-[250px] md:h-[500px]">
          <Image
            src="/puff.png"
            alt="furniture banner"
            width={463}
            height={539}
            className="w-full h-full object-cover"
          />
        </div>
        <button className="size-20 absolute bottom-0 left-16 rounded-full bg-[#f8470e] leading-none text-[15px] text-white">SHOP NOW</button>
        <p className="absolute text-xl font-semibold bottom-10 right-0 text-right">GET UP TO <br/> 50% OFF</p>
      </div>

    </div>
  );
}

export default Banner3;
