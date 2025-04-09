import React from 'react';

export default function FooterImages() {
  return (
    <div
      className="relative w-full flex flex-col items-center text-center bg-cover bg-contain bg-center min-h-[130px] overflow-hidden"
      style={{ backgroundImage: "url('/FONDO_SUBFOOTER.png')" }}
    >
      
      <div className="relative flex justify-center items-center w-full h-full min-h-[130px]">
        <img
          src="https://i.ibb.co/C3HSQcSB/COLUMNA-1.png"
          alt="Columna izquierda"
          className=" absolute left-0 h-full object-contain z-20"
        />
        <div className="flex flex-col items-center">
        <p className="font-sans font-bold text-white text-[2.6cqw] uppercase z-30 "   
      style={{textShadow: "rgba(0, 0, 0, 0.4) 0px 2px 2px"}}>
        En 2025 sin importar qué hagas, importa cómo lo muestres
      </p> 

          {/* <div className="flex justify-center items-center w-[70%] gap-2 mb-1  animate-slide"> */}
          <div className="overflow-hidden w-full z-10">
          <div className="flex animate-slide w-[195%] ">
    {[...Array(2)].map((_, index) => (
      <div key={index} className="flex gap-4 w-full justify-center items-center">
        <img src="https://i.ibb.co/67934NsP/PODCAST.png" alt="Podcast" className="w-[25%] max-w-[80px] object-contain" />
        <img src="https://i.ibb.co/zTfWB7cc/ZEUS-FESTEJANDO.png" alt="Zeus festejando" className="w-[25%] max-w-[80px] object-contain" />
        <img src="https://i.ibb.co/273wtDSV/DRONE.png" alt="Drone" className="w-[25%] max-w-[80px] object-contain" />
        <img src="https://i.ibb.co/gMCYX08N/FOTOGRAFIA.png" alt="Fotografía" className="w-[25%] max-w-[80px] object-contain" />
      </div>
    ))}
          </div>
          </div>
        <img
          src="https://i.ibb.co/ns2fJBpB/COLUMNA-2.png"
          alt="Columna derecha"
          className="absolute right-0 h-full object-contain z-20"
        />
      </div>
    </div>
    </div>
  );
}
