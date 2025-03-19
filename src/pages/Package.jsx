import Guarantee from "../components/sectionTwo/Guarantee";
import UnblockNow from "../components/UnblockNow";

export function Package(){

    return(<>
   <div className="bg-gray-900 text-white p-4 md:p-8">
      {/* Sección Principal */}
      <div className="max-w-4xl mx-auto">
        {/* Contenedor con la estructura de columnas */}
        <div className="relative flex flex-col items-center">
          {/* Textos en fondo negro sobre la imagen */}
          <div className="absolute top-8 w-11/12  p-4 text-center md:w-3/4">
            {/* Lista de beneficios */}
            <div className="mt-6 space-y-4 text-center">
              <p className="bg-black p-2 rounded-full">Más de 50 000 Clips Únicos Organizados para ganar tiempo y aumentar tu visibilidad en IG, YT Short y TikTok (98 USD)</p>
              <p className="bg-black p-2 rounded-full">Filtros Olimpus Creators 4K Videos Visuales de Lujo (67 USD)</p>
              <p className="bg-black p-2 rounded-full">Guía Olimpus Creators Estrategias Virales para TikTok y Reels (89 USD)</p>
              <p className="bg-black p-2 rounded-full">Cómo ser Viral a Nivel Internacional: Expande tu Alcance Globalmente (39 USD)</p>
              <p className="bg-black p-2 rounded-full">BONUS 1: Lecciones de Eventos Olímpicos con Barreras del Sonido (50 USD)</p>
              <p className="bg-black p-2 rounded-full">BONUS 2: Monedas Vídeos Virales en 2025 (Coming Soon...) (100 USD)</p>
            </div>
          </div>
          {/* Imagen de la estructura de columnas */}
          <img 
            src="/COLUMNAS.png" 
            alt="Estructura de Columnas" 
            className="w-full"
          />
        </div>

        {/* Lista de beneficios */}
       

        {/* Oferta Especial */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center text-center">
          <p className="text-red-600 font-bold text-xl md:text-2xl line-through">VALOR NORMAL: 400 USD</p>
          <p className="text-green-500 font-bold text-2xl md:text-3xl ml-0 md:ml-4">14.99 USD</p>
        </div>

        {/* Botón de Desbloqueo */}
        <div className="mt-6 flex justify-center">
          <UnblockNow />
        </div>

        {/* Fila de imágenes con texto */}
        <div className="mt-8">
          <Guarantee />
        </div>
      </div>
    </div>
    </>)
}