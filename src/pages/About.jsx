import React from "react";
import UnblockNow from "../components/UnblockNow";
import ViralityTitle from "../components/sectionTwo/ViralityTitle";
import ViralitySectionOne from "../components/sectionTwo/ViralitySectionOne";
import ViralitySectionTwo from "../components/sectionTwo/ViralitySectionTwo";
import Guarantee from "../components/sectionTwo/Guarantee";

export default function About() {
  return (
    <div className="bg-primary flex flex-col items-center justify-center  w-full gap-2 mt-[-2%] overflow-hidden">
      <div className="flex flex-col items-center  w-[97%] ">
        <ViralityTitle />
        <ViralitySectionOne />
        <ViralitySectionTwo />
        <div className="w-4/5 mt-2 flex justify-center">
          <UnblockNow
            scrollToId="cta-final"
            textSize="text-[3.8cqw] md:text-[40px]"
          />
        </div>
        <Guarantee />
      </div>
    </div>
  );
}
