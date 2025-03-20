export default function FooterImages() {
  return (
    <div
      className="relative w-full flex flex-col items-center text-center bg-cover bg-top min-h-[130px] overflow-hidden"
      style={{ backgroundImage: "url('/FONDO_SUBFOOTER.png')" }}
    >
      <p className="font-sans font-bold text-white text-[11px] uppercase mt-2">
        En 2025 sin importar qué hagas, importa cómo lo muestres
      </p>

      <div className="relative flex justify-center items-center w-full mt-2">
        <img
          src="/COLUMNA_1.PNG"
          alt="Columna izquierda"
          className="absolute left-0 w-[9.5%] max-w-[100px] top-[-35px]"
        />
        <div className="flex justify-center items-center w-[70%] gap-2 mb-1">
          <img src="/PODCAST.PNG" alt="CTA 2" className="w-[25%] max-w-[80px] object-contain" />
          <img src="/ZEUS_FESTEJANDO.PNG" alt="CTA 3" className="w-[25%] max-w-[80px] object-contain" />
          <img src="/DRONE.PNG" alt="CTA 4" className="w-[25%] max-w-[80px] object-contain" />
          <img src="/FOTOGRAFIA.PNG" alt="CTA 5" className="w-[25%] max-w-[80px] object-contain" />
        </div>
        <img
          src="/COLUMNA_2.PNG"
          alt="Columna derecha"
          className="absolute right-0 w-[8%] max-w-[100px]  top-[-36px]"
        />
      </div>
    </div>
  );
}
