import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';


const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    ScrollReveal().reveal(".letter-s", { duration: 1000, delay: 8000 });
    ScrollReveal().reveal(".letter-s2", { duration: 1000, delay: 9000 });
    ScrollReveal().reveal(".letter-s3", { duration: 1000, delay: 5000, afterReveal: handleTextDisappear });
    ScrollReveal().reveal("img", { duration: 1000, delay: 2500 });
    ScrollReveal().reveal(".explore", { duration: 1000, delay: 3500 });
    ScrollReveal().reveal("h5", { duration: 1000, interval: 500, delay: 4000 });
    ScrollReveal().reveal(".catalog", { duration: 1000, delay: 6000 });
    ScrollReveal().reveal(".print", { duration: 1000, delay: 7500 });
    ScrollReveal().reveal(".footer p", { duration: 1000, delay: 7000 });

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Desaparece después de 4 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleTextDisappear = () => {
    setTimeout(() => {
      setShowText(false);
    }, 7000); // Desaparece después de 3 segundos
  };

 

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat relative bg-black"
      style={{ backgroundImage: "url('https://i.ibb.co/6869nZw/2b16e08f-37c0-4e50-8283-21425683075b.webp')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>


      <span className="text-4xl letter-s absolute mb-1 mt-10 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10rem] sm:text-[15rem] md:text-[20rem] lg:text-[25rem] xl:text-[30rem] 2xl:text-[35rem] font-bold font-lato text-[#f9bc66]">GO</span>
<span className="letter-s2 absolute mt-10 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[10rem] font-bold font-lato text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.75)]">Pitchering</span>

{showText && (
  <div className="absolute inset-0 flex flex-col justify-center items-center md:gap-6 mt-32 w-full px-4 sm:gap-6 sm:mt-25">
    <h5 className="letter-s3 text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.75)]">
      No necesitas preocuparte más por tener seguidores
    </h5>
    <div className="flex flex-col gap-2 sm:flex-row sm:gap-10 justify-center mt-2 sm:mt-4 w-full">
      <h5 className="letter-s3 text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.75)]">
        No necesitas tener experiencia previa
      </h5>
      <h5 className="letter-s3 text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.75)]">
        No necesitas subir contenido todos los días.
      </h5>
    </div>
  </div>
)}


      <button
        className="btn explore absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-[225px] px-4 py-2 text-black bg-white hover:bg-yellow-500/50 font-semibold shadow-lg"
      >
        VER MÁS
      </button>

      <a href="https://facebook.com" className="btn print absolute top-1/2 right-0 transform translate-y-[-50%] rotate-90 px-4 py-2 text-[#013557] border border-[#013557]">Facebook</a>
      <a href="https://instagram.com" className="btn catalog absolute top-1/4 left-0 transform translate-y-[-50%] rotate-[-90deg] px-4 py-2 text-[#f9bc66] border border-[#f9bc66]">Instagram</a>

      {isVisible && (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent pointer-events-none">
          <h4 className="text-center text-white text-4xl font-bold drop-shadow-[0_1px_1px_rgba(0,0,0,0.75)] transition-opacity duration-500">
            Conoce el NUEVO Trabajo que va a revolucionar el Mercado Digital en 2025
          </h4>
        </div>
      )}

      <footer className="footer absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full px-4 flex items-center justify-center gap-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.75)]">
        <p className="text-white/80 text-sm sm:text-xs md:text-sm lg:text-base font-bold">Copyright © 2025</p>
      </footer>


    </div>
  );
};

export default Home;
