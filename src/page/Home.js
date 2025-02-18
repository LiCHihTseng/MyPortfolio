import React from 'react';
import { Banner } from "../components/banner/Banner";
import { CardView } from "../components/CardView";
import transition from "../transition";

const Home = () => {
  return (
    <div>
      <Banner />
      <CardView className="mb-10"/>
      <div className=" hidden lg:flex " style={{ height: "60vh" }}></div>

    </div>
  );
};

export default Home;