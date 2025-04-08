const texts = [
  "Más de 50.000 Clips Únicos: Organizados para ahorrar tiempo y aumentar tu visibilidad en IG, YT Short y TikTok (89 USD)",
  "Filtros Olimpus Creators 4k: Videos Visuales de Lujo (67 USD)",
  "Guía Olimpus Creators: Estrategias Virales para Tik Tok y Reels (49 USD)",
  "Cómo ser Viral a Nivel Internacional: Expande tu Alcance Globalmente (39 USD)",
  "BONUS 1: Licencia de Reventa Olimpus con Ganancia del 80% (49 USD)",
  "BONUS 2: Monetiza Videos Virales en 2025 (Coming Soon...) (110 USD)",
];

export function TextsList({ package2 = false }) {
  return (
    <div
      className={`w-full ${
        !package2 ? "mt-[6rem]" : "mt-[-15px] p-1"
      } flex flex-col items-center space-y-[-5px]`}
    >
      {
        <p className="font-cincel text-[3.2cqw] text-white mb-1 z-30">
          {" "}
          ¿QUÉ ES LO QUE OBTIENES EN ESTE PAQUETE EXCLUSIVO?
        </p>
      }
      {texts.map((text, index) => (
        <div
          key={index}
          className="relative flex justify-center items-center w-full bg-cover bg-center text-center  "
          style={{
            backgroundImage: `url('${package2 ? "/OFERTA-2.png" : "/OFERTA.png"}')`,
            width: "100%",
            height: 38,
          }}
        >
          <p className="w-[94%] text-white font-sans text-[10px] text-center">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}
