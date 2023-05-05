import product from '../../assets/product.png'
import { useState } from 'react';
const CategoryCard = () => {
  const [zoom,setZoom] = useState(!!0)
  const Zoom = () => {
    setZoom(!zoom);
  }
  return (
    <div onMouseEnter={Zoom} onMouseLeave={Zoom} className=" pb-7 flex flex-col rounded-md bg-white shadow-md border-none">
      <img src={product} className="w-full h-[10rem]" />
      <div className="px-4 ">
        <p className="font-bold">Adidas Converse</p>
        <p className="font-semibold">$1200</p>
        <div className={`${zoom ? 'lg:flex flex justify-center items-center  mt-4': 'hidden'} `}>
          <a
            href=""
            className="bg-[#D78484] px-3 py-3 rounded-md w-[10rem] text-white text-center"
          >
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
