import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";
import CallToAction from "../components/CallToAction";
import Virality from "../components/ViralityTitle";
import ViralitySectionOne from "../components/ViralitySectionOne";
import ViralitySectionTwo from "../components/ViralitySectionTwo";

export default function About () {
  return (
    <div className="bg-olimpus flex flex-col items-center justify-center  w-full gap-2 mt-[-2%]">
      <Virality/>
      <ViralitySectionOne/>
      <ViralitySectionTwo/>

        {/* <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-700">
          <li>1. MÁS DE 50 000 CLIPS PREMIUM PARA TIKTOK Y REELS.</li>
          <li>2. GUÍA VIRAL: ESTRATEGIAS COMPROBADAS PARA VIRALIZAR.</li>
          <li>3. FILTROS 4K PARA IMPACTAR Y RETENER EN TODOS TUS VIDEOS.</li>
          <li>4. CONTENIDO 100% ORGANIZADO PARA QUE ENCUENTRES TODO.</li>
          <li>
            5. LICENCIA PARA LA REVENTA CON UN BENEFICIO DEL 80% PARA VOS.
          </li>
          <li>6. MONETIZA VIDEOS VIRALES EN 2025 CON EL MÉTODO VRV.</li>
        </ul>
        <div className="mt-6 text-center">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm md:text-base hover:bg-blue-700">
            DESBLOQUEA AHORA (USD 14.99)
          </button>
        </div>
        <div className="mt-4 text-center text-xs md:text-sm text-gray-600">
          <p>ACCESO INSTANTÁNEO</p>
          <p>GARANTÍA DEVOLUCIÓN DE 7 DÍAS SIN PREGUNTAS</p>
          <p>PAGOS SEGURO VÍA HOTMART</p>
        </div> */}
    </div>
  );
}
