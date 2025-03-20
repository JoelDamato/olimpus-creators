export default function Footer (){
  return (
    <footer className="bg-grey text-white py-2">
    <div className="container mx-auto flex flex-col items-center gap-4">
      <img
        src="/HEAD-OLIMPUS-AZUL.png"
        alt="OLIMPUS LOGO"
        className="w-[300px]  "
      />
      <p className="w-[80%] text-center text-[12px] font-sans">
        <a
          href="/politicas-de-privacidad"
        >
          @ 2025 Olimpus Creators {" | "} Todos los derechos reservados.
        </a>
        </p>
        <p className="text-center text-[10px] font-sans mt-[-15px]">
        <a
          href="/politica-compra"
          className="underline"
        >
          Políticas de uso y Garantías
        </a>
      </p>
    </div>
  </footer>
  );
};

