import React from "react";
import Header from "../components/sectionOne/Header";
import Description from "../components/sectionOne/Description";
import CallToAction from "../components/sectionOne/CallToAction";

const Home = () => {
  return (
    <div className="w-full bg-primary text-white p-4 md:p-10  relative overflow-hidden">
      <Header />
      <Description />
      <CallToAction />
    </div>
  );
};

export default Home;
