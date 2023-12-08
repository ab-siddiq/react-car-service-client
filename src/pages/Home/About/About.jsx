import React from "react";
import person from "../../../assets/about_us/person.jpg";
import parts from "../../../assets/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 relative">
          <img src={person} className="w-3/4 h-96 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-2/4 h-72 rounded-lg shadow-2xl absolute right-16 ring-[#FF3811] top-1/2 border-4 border-[#737373] ring-8"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-[#FF3811] font-bold">About Us</h2>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="py-6 text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] text-white hover:bg-transparent hover:text-[#FF3811] hover:border-[#FF3811] font-bold border-2">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
