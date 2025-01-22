import Marquee from "@/components/ui/marquee";

const logos = [
  {
    name: "E-commerce example 1",
    img: "/marquee1.png",
  },
  {
    name: "E-commerce example 2",
    img: "/marquee2.png",
  },
  {
    name: "E-commerce example 3",
    img: "/marquee3.png",
  },
  {
    name: "E-commerce example 4",
    img: "/marquee4.png",
  }
];

export function Marquee3D() {
  return (
    <div className="relative flex h-full min-w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border bg-transparent px-20 ">
      <div className="flex flex-row gap-4 [perspective:300px]">
        <Marquee
          className="h-96 justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
          vertical
          style={{
            transform:
              "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
          }}
        >
          {logos.map((data, idx) => (
            <img
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
            />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
