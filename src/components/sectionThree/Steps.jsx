import React, { useState, useEffect, useCallback } from "react";

const clips = [
  "/clip1.mp4",
  "/clip2.mp4",
  "/clip3.mp4",
  "/clip4.mp4",
  "/clip5.mp4",
  "/clip6.mp4",
  "/clip7.mp4",
];

export default function Steps() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % clips.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? clips.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative bg-secondary flex flex-col items-center mb-[-10px]">
      <div className="flex md:flex gap-6 justify-center items-center relative h-[200px]">
        <button
          onClick={prevSlide}
          className="absolute left-[-35px] top-1/2 -translate-y-1/2  bg-black/20  hover:bg-black/20 rounded-full p-1 z-10"
        >
          <img
            src="/FLECHA_IZQ.png" // Reemplaza con la ruta correcta de tu imagen
            alt="Flecha izquierda"
            className="w-6 h-6" // Ajusta el tamaño de la imagen según lo necesario
          />
        </button>

        {[-1, 0, 1].map((offset) => {
          const index = (currentIndex + offset + clips.length) % clips.length;
          return (
            <video
              autoPlay
              loop
              muted
              playsInline
              key={index}
              src={clips[index]}
              alt={`Clip ${index + 1}`}
              className={`rounded-lg transition-all duration-500 shadow-lg object-contain 
                ${
                  offset === 0
                    ? "max-w-[90px] scale-110 z-10 brightness-100 ease-in-out"
                    : "max-w-[70px] scale-90 opacity-50 brightness-50 -translate-y-4 ease-in-out"
                }`}
            />
          );
        })}
        <button
          onClick={nextSlide}
          className="absolute right-[-35px] top-1/2 -translate-y-1/2 bg-black/20  hover:bg-black/20 rounded-full p-1 z-10 "
        >
          <img src="/FLECHA_DER.png" alt="Flecha derecha" className="w-6 h-6" />
        </button>
           <img
                    src="https://i.ibb.co/96fFs82/ZEUS-APUNTANDO.png"
                    alt="Zeus Apuntando"
                  className="absolute right-[-80px] top-[45%] w-[80px] w-20 h-30 md:w-[120px]"
                  />
      </div>
    </section>
  );
}
