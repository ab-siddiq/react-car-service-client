import React from "react";

const BannerContent = ({ content: { id, img, slideNo } }) => {
  console.log(slideNo[0]);
  return (
    <div id={id} className="carousel-item relative w-full h-[400px]  ">
      <img src={img} className="w-full " />
      <div className="absolute  flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
        <a href={`#${slideNo[0]}`} className="btn btn-circle bg-[rgba(255, 255, 255, 0.20) hover:border-transparent hover:bg-[#FF3811]">
          ❮
        </a>
        <a href={`#${slideNo[1]}`} className="btn btn-circle bg-[#FF3811] border-transparent">
          ❯
        </a>
      </div>
      <div className="absolute  flex  items-center  pl-20  text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full w-1/2">
        <div className=" ">
        <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
        <p className="text-md my-4">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div className="flex gap-2">
          <button className="bg-[#FF3811] px-3 py-1 rounded-lg">Discover More</button>
          <button className="border-2 border-white-50 px-3 py-1 rounded-lg">Latest Project</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
