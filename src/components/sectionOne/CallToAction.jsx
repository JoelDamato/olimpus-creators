import { ArrowRightIcon } from "@heroicons/react/24/solid";
import UnblockNow from "../UnblockNow";

export default function CallToAction() {
  return (
    <>
      <div className="flex flex-row md:flex-row items-center justify-center mt-2 w-full gap-2 overflow-hidden">
        <div className="w-1/3 md:w-1/3 flex justify-center">
          <img
            src="https://i.ibb.co/S4DJpdh8/HERMES-MAC-AZUL.png"
            alt="Hermes con laptop"
            className="w-full max-w-sm"
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col items-center gap-6">
          <UnblockNow scrollToId="cta-final" />
          <div className="relative w-full max-w-4xl mt-[-20px]">
            <img
              src="https://i.ibb.co/d4RyDk5W/CTA-2.png"
              alt="CTA 2"
              className="w-full"
            />
            <div className="absolute top-[10%] left-0 right-0 text-center text-white text-3xl sm:text-4xl md:text-7xl font-cincel">
              4.95/5
            </div>

            <div className="absolute bottom-[30%] left-0 right-0 text-center text-white font-normal text-[10px] md:text-4xl font-sans">
              9 de cada 10 NO tienen acceso a nuestros clips...
            </div>

            <div className="absolute bottom-[13%] left-0 right-0 text-center text-[#90766A] font-normal  text-[11px] md:text-4xl font-sans">
              {/* <a
                href="https://pay.hotmart.com/F98750477I?checkoutMode=10"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-4xl"
              > */}
                <p
                  onClick={() => {
                    const el = document.getElementById("cta-final");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center gap-1 cursor-pointer"
                >
                  Desbloquear el Olimpo de la Viralidad
                  <ArrowRightIcon className="w-3 h-3 text-[#90766A]" />
                </p>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
