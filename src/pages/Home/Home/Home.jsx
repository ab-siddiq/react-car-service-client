import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="text-2xl">
      <Banner></Banner>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Home;
