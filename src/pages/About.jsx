import React from "react";
import Header from "../components/Header";
import Description from "../components/Description";
import CallToAction from "../components/CallToAction";

export default function About () {
  return (
    <div className="bg-olimpus flex items-center justify-center  w-full gap-2">
         <div className="w-1/4 md:w-1/3 flex justify-center">
        <img src="/LOGO.png"
        className=""
        alt="logo-olimpus" />
        </div>
        <div className="w-full md:w-2/3 flex flex-col items-center gap-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 text-blue-600">
          EL OLIMPO DE LA VIRALIDAD
        </h1>
        <p className="text-center text-sm md:text-base font-medium text-gray-700">
          No vendemos clips, te entregamos el modelo de negocio completo + los
          clips más virales testeados por nosotros que nadie está utilizando en
          habla hispana aún y pueden ayudarte a crecer si comienzas AHORA.
        </p>
        </div>

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
