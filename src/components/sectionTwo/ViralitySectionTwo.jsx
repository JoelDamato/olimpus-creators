export default function ViralitySectionTwo() {
  return (
    <>
      {/* <div className="w-full flex mt-1"> */}
      <div className="flex mt-4 md:mt-6 md:justify-center md:items-center">

      <div className="w-2/3 md:w-2/4 flex flex-col gap-3 md:gap-6 relative" >
        {[
          "CONTENIDO 100% ORGANIZADO PARA QUE ENCUENTRES TODO.",
          "LICENCIA PARA LA REVENTA CON UN BENEFICIO DEL 80% PARA VOS.",
          "MONETIZA VIDEOS VIRALES EN 2025 CON EL MÉTODO VRV."
        ].map((text, index) => (
          <div key={index} className="relative flex items-center" >
            <div className="text-[80%] bg-[#1A1A1A] text-white p-1 pl-8 pr-4 md:pl-16 rounded-full w-full md:text-lg font-medium font-cincel" 
             style={{
              boxShadow: "10px 7px 0px -4px rgba(0,0,0,0.6)", 
              WebkitBoxShadow: "10px 7px 0px -4px rgba(0,0,0,0.6)",
            MozBoxShadow: "10px 7px 0px -4px rgba(0,0,0,0.6)"}}>
              {text}
            </div>
            <div className="absolute right-[-25px] md:right-[-15px] w-12 h-12 flex items-center justify-center bg-[#1A1A1A] text-white font-bold rounded-full text-lg border-4 border-[#1A1A1A] text-[22px]" style={{textShadow: 'rgba(0, 0, 0, 0.59) 2px 1px 2px'}}>
              {index + 4}
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/3 md:w-1/3 flex justify-center overflow-hidden">
        <img src="/FLOW-CON-IPHONE.png" alt="Figura viral" className="w-full max-w-xs md:max-w-sm mr-[-30%]"  />
      </div>
      </div>
      </>
  );
}
