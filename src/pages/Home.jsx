import React from "react";
import Header from "../components/sectionOne/Header";
import Description from "../components/sectionOne/Description";
import CallToAction from "../components/sectionOne/CallToAction";

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
