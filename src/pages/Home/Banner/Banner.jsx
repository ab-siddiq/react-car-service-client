import React from "react";
import banner1 from "../../../assets/banner/1.jpg";
import banner2 from "../../../assets/banner/2.jpg";
import banner3 from "../../../assets/banner/3.jpg";
import banner4 from "../../../assets/banner/4.jpg";
import BannerContent from "./BannerContent";

const Banner = () => {
const bannerItem = [
  {
    id: 'slide1',
    img: banner1,
    slideNo: ['slide4','slide2'],
  },
  {
    id: 'slide2',
    img: banner2,
    slideNo: ['slide1','slide3'],
  },
  {
    id: 'slide3',
    img: banner3,
    slideNo: ['slide2','slide4'],
  },
  {
    id: 'slide4',
    img: banner4,
    slideNo: ['slide3','slide1'],
  },
]
console.log(bannerItem)
  return (
    <div className="carousel w-full rounded-xl">
      {
        bannerItem.map(item=><BannerContent key={item.id} content={item}></BannerContent>)
      }
    </div>
  );
};

export default Banner;
