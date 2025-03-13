import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";
import UnblockNow from "../components/UnblockNow";
import Virality from "../components/ViralityTitle";
import ViralitySectionOne from "../components/ViralitySectionOne";
import ViralitySectionTwo from "../components/ViralitySectionTwo";
import Guarantee from "../components/Guarantee";

export default function About() {
  return (
    <div className="bg-olimpus flex flex-col items-center justify-center  w-full gap-2 mt-[-2%]">
      <Virality />
      <ViralitySectionOne />
      <ViralitySectionTwo />
      <div className="w-4/5 flex justify-center">
        <UnblockNow
          textSize="text-[16px] md:text-[50px]"
          padding="mr-4 md:mr-12"
        />
      </div>
      <Guarantee />
    </div>
  );
}
