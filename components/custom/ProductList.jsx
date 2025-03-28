'use client';

import Product from "./Product";

const recents = [
    {
      title:"Bed & Pillows",
      img: "https://i.etsystatic.com/11651126/r/il/d76bf6/5753982272/il_600x600.5753982272_41ig.jpg",
      price:'1780',
      dummy:'KSH 1900',
      id:101
    },
    {
      title:"Art pieces",
      img: "https://i.etsystatic.com/43790300/r/il/15e507/6401998736/il_600x600.6401998736_tv40.jpg",
      price:'800',
      dummy:'KSH 920',
      id:102
    },
    {
      title:"Wearables",
      img: "https://i.etsystatic.com/ij/733dca/6586968809/ij_600x600.6586968809_q0zid5sd.jpg?version=0",
      price:'500',
      dummy:'KSH 620',
      id:103
    },
    {
      title:"Gifts",
      img: "https://i.etsystatic.com/25304800/r/il/b9d4bd/6297597679/il_600x600.6297597679_bc6n.jpg",
      price:'780',
      dummy:'KSH 850',
      id:104
    },
    {
      title:"Watches",
      img: "https://i.etsystatic.com/11118406/c/2048/2048/0/0/il/4e57ad/3571041628/il_600x600.3571041628_d0kp.jpg",
      price:'1500',
      dummy:'KSH 1700',
      id:105
    },
    {
      title:"Watches",
      img: "https://i.etsystatic.com/11118406/c/2048/2048/0/0/il/4e57ad/3571041628/il_600x600.3571041628_d0kp.jpg",
      price:'1500',
      dummy:'KSH 1700',
      id:106
    },
  ];
function ProductList() {

  return (
    <div className={`flex gap-3 lg:gap-5 mt-3 w-full no-scrollbar snap-x overflow-auto`}>
        {recents.map((recent)=>(
          <Product key={recent.id} recent={recent}/>
        ))}
        </div>
  )
}

export default ProductList