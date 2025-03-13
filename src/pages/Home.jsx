import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div className="bg-olimpus text-white p-4 md:p-10  relative">
      <Header />
      <Description />
      <CallToAction />
    </div>
  );
};

export default Home;
