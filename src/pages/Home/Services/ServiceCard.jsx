import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service: { _id, img, title, price } }) => {
  return (
    <div className="">
      <div className="card card-compact w-full h-72 bg-base-100 shadow-xl">
        <figure>
          <img
            className="hover:scale-105 transform duration-500"
            src={img}
            alt={title}
          />
        </figure>
        <div className="card-body border-x-2 border-b-2 border-gray-600 rounded-b-lg">
          <h2 className="card-title">{title}</h2>
          <p>$ {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}>
              <button className="bg-[#FF3811] px-3 py-1 border-2 border-transparent rounded-lg text-white hover:bg-transparent hover:border-2 hover:border-[#FF3811] hover:text-[#FF3811] font-bold">
                Explore more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
