import React from "react";
import UnblockNow from "../components/UnblockNow";
import ViralityTitle from "../components/sectionTwo/ViralityTitle";
import ViralitySectionOne from "../components/sectionTwo/ViralitySectionOne";
import ViralitySectionTwo from "../components/sectionTwo/ViralitySectionTwo";
import Guarantee from "../components/sectionTwo/Guarantee";

export default function About() {
  return (
    <div className="bg-primary flex flex-col items-center justify-center  w-full gap-2 mt-[-2%]">
      <ViralityTitle />
      <ViralitySectionOne />
      <ViralitySectionTwo />
      <div className="w-4/5 flex justify-center">
        <UnblockNow
          textSize="text-[16px] md:text-[40px]"
          padding="mr-4 md:mr-12"
        />
      </div>
      <Guarantee />
    </div>
  );
}
