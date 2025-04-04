export default function ViralitySectionOne() {
  return (
    <>
      <div className="flex mt-4 md:mt-6 md:justify-center md:items-center overflow-hidden">
        <div className="w-1/3 md:w-1/3 flex justify-center">
          <img
            src="/ESTATUA-FOTO.png"
            alt="Figura viral"
            className="w-full max-w-xs md:max-w-sm ml-[-30%]"
          />
        </div>
        <div className="w-2/3 md:w-2/4 flex flex-col gap-3 md:gap-6 relative">
          {[
            "MÁS DE 50 000 CLIPS PREMIUM PARA TIKTOK Y REELS.",
            "GUÍA VIRAL: ESTRATEGIAS COMPROBADAS PARA VIRALIZAR.",
            "FILTROS 4K PARA IMPACTAR Y RETENER EN TODOS TUS VIDEOS.",
          ].map((text, index) => (
            <div key={index} className="relative flex items-center ">
              <div
                className="absolute -left-5 md:-left-6 w-12 h-12 flex items-center justify-center bg-[#1A1A1A] text-white font-bold rounded-full text-lg border-4 border-[#1A1A1A] text-[22px]"
                style={{ textShadow: "rgba(0, 0, 0, 0.59) 2px 1px 2px" }}
              >
                {index + 1}
              </div>
              <div
                className="text-[13px] bg-[#1A1A1A] text-white p-1 pl-8 pr-4 md:text-[24px] md:pl-16 rounded-full w-full md:text-lg font-medium font-cincel"
                style={{
                  textShadow: "rgba(0, 0, 0, 0.59) 2px 1px 2px",
                  boxShadow: "10px 7px 0px -4px rgba(0,0,0,0.6)",
                  WebkitBoxShadow: "10px 7px 0px -4px rgba(0,0,0,0.6)",
                  MozBoxShadow: "10px 7px 0px -4px rgba(0,0,0,0.6)",
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
