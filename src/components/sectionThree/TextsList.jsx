const texts = [
    "Más de 50.000 Clips Únicos: Organizados para ahorrar tiempo y aumentar tu visibilidad en IG, YT Short y TikTok (89 USD)",
    "Filtros Olimpus Creators 4k: Videos Visuales de Lujo (67 USD)",
    "Guía Olimpus Creators: Estrategias Virales para Tik Tok y Reels (49 USD)",
    "Cómo ser Viral a Nivel Internacional: Expande tu Alcance Globalmente (39 USD)",
    "BONUS 1: Licencia de Reventa Olimpus con Ganancia del 80% (49 USD)",
    "BONUS 2: Monetiza Videos Virales en 2025 (Coming Soon...) (110 USD)"
  ];
  
  export function TextsList() {
    return (

   
      <div className="w-full mt-[6rem] flex flex-col items-center space-y-[-5px]">
        {texts.map((text, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center w-full bg-cover bg-center text-center "
            style={{ backgroundImage: "url('/OFERTA.png')", width: "105%", height: 50 }}
          >
            <p className="w-[94%] text-white font-sans text-[10px] text-center">
              {text}
            </p>
          </div>
        ))}
    </div>
    );
  }
  