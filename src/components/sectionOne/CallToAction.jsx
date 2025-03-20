import { ArrowRightIcon } from "@heroicons/react/24/solid";
import UnblockNow from "../UnblockNow";

export default function CallToAction() {
  return (
    <>
      <div className="flex flex-row md:flex-row items-center justify-center mt-2 w-full gap-2">
        <div className="w-1/3 md:w-1/3 flex justify-center">
          <img
            src="/HERMES-MAC-AZUL.PNG"
            alt="Hermes con laptop"
            className="w-full max-w-sm"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col items-center gap-6">
          <UnblockNow/>
          <div className="relative w-full max-w-4xl mt-[-20px]">
            <img src="/CTA-2.PNG" alt="CTA 2" className="w-full" />

            <div className="absolute top-[10%] left-0 right-0 text-center text-white text-3xl sm:text-4xl md:text-7xl ">
              4.95/5
            </div>

            <div className="absolute bottom-[21%] left-0 right-0 text-center text-white font-normal text-[13px] md:text-4xl font-sans">
              9 de cada 10 NO tienen acceso a nuestros clips...
            </div>

            <div className="absolute bottom-[10%] left-0 right-0 text-center text-[#90766A] font-normal  text-[13px] md:text-4xl font-sans">
              <p className="inline-flex items-center gap-1" >
                Desbloquear el Olimpo de la Viralidad  <ArrowRightIcon className=" w-3 h-3 text-[#90766A]" /></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
