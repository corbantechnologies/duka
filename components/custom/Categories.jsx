"use client";

const recents = [
    {
      title:"Bed & Pillows",
      img: "https://i.etsystatic.com/11651126/r/il/d76bf6/5753982272/il_600x600.5753982272_41ig.jpg",
    },
    {
      title:"Art pieces",
      img: "https://i.etsystatic.com/43790300/r/il/15e507/6401998736/il_600x600.6401998736_tv40.jpg",
    },
    {
      title:"Wearables",
      img: "https://i.etsystatic.com/ij/733dca/6586968809/ij_600x600.6586968809_q0zid5sd.jpg?version=0",
    },
    {
      title:"Gifts",
      img: "https://i.etsystatic.com/25304800/r/il/b9d4bd/6297597679/il_600x600.6297597679_bc6n.jpg",
    },
    {
      title:"Watches",
      img: "https://i.etsystatic.com/11118406/c/2048/2048/0/0/il/4e57ad/3571041628/il_600x600.3571041628_d0kp.jpg",
    },
  ];

function Categories() {

  return (
    <div className="px-4 lg:px-8">
        <h1 className="text-2xl lg:text-3xl font-semibold">Popular categories</h1>
        <div className="grid grid-cols-2 sm:flex gap-5 mt-3 w-full snap-x overflow-auto no-scrollbar">
        {recents.map((recent)=>(
            <div key={recent.img} className="snap-start flex-shrink-0 sm:max-w-[200px]">
              <div>
                <img className="rounded-lg object-cover mb-1" alt="images of recent views" src={recent.img} />
                <p>{recent.title}</p>
              </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Categories