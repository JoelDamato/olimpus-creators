import React, { useState, useEffect, useRef } from 'react';

export default function WorkshopLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600000); // 1 hora en milisegundos
  const [showExtraContent, setShowExtraContent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const lastSectionRef = useRef(null);


  
    const handleScroll = () => {
      lastSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

  useEffect(() => {
    // Escuchar mensajes del iframe
    const handleMessage = (event) => {
      const { data } = event;
      if (data.message === "panda_timeupdate") {
        console.log(`Tiempo actual del video: ${data.currentTime}s`);
        // Mostrar contenido adicional si el tiempo alcanza 18 segundos
        if (data.currentTime >= 18) {
          setShowExtraContent(true);
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime <= 0 ? 3600000 : prevTime - 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = document.getElementById("hide-section");
      const triggerOffset = triggerPoint ? triggerPoint.offsetTop : Infinity;
      
      if (window.scrollY > window.innerHeight && window.scrollY < triggerOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (

    <>
    {isModalOpen && (
   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[100000]">
   <div className="bg-white p-6 rounded-lg shadow-lg max-w-[90%] w-full text-center">
   <button 
  className="flex justify-start ml-auto text-4xl font-bold text-red-600"
  onClick={() => setIsModalOpen(false)}
>
  ×
</button>

      <img src="/mockup.png" alt="Imagen Modal" className="w-full mb-4 rounded" />
      <div className="flex flex-col mt-4">
        <h1 className='text-2xl font-bold'>Seleccione su pais:</h1>
        <p className='mb-2'>🔒 Tienes una garantia de 7 dias de devolucion</p>
        <a 
          href="https://mpago.li/2GbVtVe" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gradient-to-r from-black via-[#013557] mb-3 rounded-full text-2xl to-black text-white px-4 py-2"
        >
         🇦🇷 Soy de Argentina
        </a>
        <a 
          href="https://pay.hotmart.com/O94296249S?off=jhyjalcn&checkoutMode=10" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gradient-to-r from-black via-[#013557] mb-3 rounded-full text-2xl to-black text-white px-4 py-2"
        >
         🌍 Soy de Otros Pais
        </a>
            <a 
      href="https://api.whatsapp.com/send?phone=5493516361261&text=Hola,%20quiero%20inscribirme%20a%20Go%20Pitchering%20v%C3%ADa%20Crypto,%20gracias" 
      className='underline'
      target="_blank" 
      rel="noopener noreferrer" 
    >
        Si queres pagar con crypto, Click aquí
    </a>

      </div>
    </div>
  </div>
)}


    <div
      className="min-h-screen pb-[2rem] flex flex-col items-center justify-center overflow-x-hidden"
      style={{
        background: "linear-gradient(to right, black, #013557 50%, black 100%)",
        fontFamily: "Lato, sans-serif",
      }}
    >
        {/* HEADER */}
        <img src="/gopit.png" className="w-[90%] my-3 md:my-5" alt="Logo" />
        <h2 className="text-md md:text-2xl text-white text-center font-medium px-4">
          Para trabajar digital en 2025 no necesitas miles de seguidores ni invertir en publicidad, este es el camino más rápido...
        </h2>


        <div className="bg-white rounded-2xl max-w-4xl w-[90%] p-2 md:p-6 mx-5 shadow-lg mt-7">
          <header className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-2">
              Conviértete en Pitcher Partner y gana grandes comisiones con un método probado en solo 7 días
            </h1>
            <p className="text-xl text-gray-700 mb-3">
              <span className="text-[#f9bc66] font-bold">
                APRENDIENDO A MONETIZAR EL CONOCIMIENTO DE OTROS <span className="italic">7 días</span>...
              </span>
            </p>
          </header>

          <div className="text-center flex justify-center items-center w-full mb-5 overflow-hidden bg-black">
            <iframe
              ref={videoRef}
              src="https://player-vz-7cd4a4ef-9e2.tv.pandavideo.com/embed/?v=4e5e8782-e596-4b94-aae5-1b769edb4533"
              style={{ border: "none", width: "100%", height: "100%" }}
              allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
              className="aspect-video w-full"
              title="Video"
            />
          </div>

      
          {/*INICIO */}
                <div>

                  
                  <section className="w-full max-w-4xl mt-2 bg-white">
                                <h1
                 onClick={handleScroll}
                className="bg-gradient-to-r from-black via-[#013557] to-black text-white font-bold text-center text-3xl md:text-2xl py-4 px-8 rounded-lg w-full max-w-2xl mx-auto block mb-16 transition-all duration-300"
              >
                <span className="text-3xl md:text-3xl block">Estoy listo para...</span>
                <span className="text-xs md:text-lg block">Ayudar a mi primer influencer y generar ingresos</span>
              </h1>


                    <div className="relative mb-12 w-full">
                      <img src="/mockup.png" alt="Mockup" className="w-full h-auto" />
                    </div>

                    <div className="flex flex-col items-center text-center p-6 w-11/12 md:w-3/4 mx-auto">
                    <div className="flex">
                      <h2 className="text-xl font-bold mb-6 leading-tight">
                        Este es el momento ideal para hacer lo que menos del 1% de los emprendedores está haciendo:
                      </h2>

                      </div>
                      <div className="flex flex-col gap-3">
                        {/* Bloque 1 */}
                        <div className="flex">
                          <img src="/flecha1.png" alt="" className='w-8 absolute left-9 mt-10' />
                          <p className="text-lg md:text-2xl  font-bold flex-grow ">
                            Dejar de depender de modelos de negocios saturados o que no son aplicables para vos...
                          
                          </p>
        
                        </div>
                        {/* Bloque 2 */}
                        <div className="flex md:flex-row items-center justify-between md:mt-8">
                          <p className="text-lg md:text-2xl font-bold flex-grow ">
                            Comenzar tu negocio digital en los próximos 30 días sin margen de error sin dejar de hacer lo que estás haciendo hoy en día.
                          </p>
                            <img src="/flecha2.png" alt="" className='w-8 absolute right-8 mt-20' />
                        </div>
                        {/* Bloque 3 */}
                        <div className="flex md:flex-row items-center justify-between md:mt-8">
                          <img src="/flecha1.png" alt="" className='w-8 absolute left-9 mt-20' />
                          <p className="text-lg  md:text-2xl font-bold flex-grow ">
                            No necesitas salir a prospectar todos los días, ya que con un solo influencer basta.
                          </p>
                        </div>
                        {/* Bloque 4 */}
                        <div className="flex  md:flex-row items-center justify-between ">
                          <p className="text-lg font-bold flex-grow ">
                            Esto NO es OTRO modelo de negocios más como te presentan los demás allá afuera.
                          </p>
                          <img src="/flecha2.png" alt="" className='w-8 absolute right-8 mt-20' />
                        </div>
                        {/* Bloque 5 */}
                        <div className="flex items-center justify-between">
                          <p className="text-lg font-bold flex-grow ">
                            Esto es TU propio negocio ESTABLE Y RENTABLE PARA LOS PRÓXIMOS 5 AÑOS...
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={` z-[99999] pointer-events-auto fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white p-4 shadow-lg w-full max-w-md text-center ${isVisible ? 'block' : 'hidden'}`}>
      <p className="text-lg pb-1">Tenes una garantia de 7 dias</p>
      <button 
      onClick={handleScroll}
        className="flex justify-center items-center  gap-2 bg-gradient-to-r from-black via-[#013557] to-black text-white text-md md:text-2xl font-medium py-4 px-8 rounded-lg w-full transition-all duration-300 hover:scale-105" 
      >
        Accede al entrenamiento ahora
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
</svg>

      </button>
      <a 
   href="https://api.whatsapp.com/send?phone=5493516361259&text=Hola,%20quiero%20inscribirme%20a%20Go%20Pitchering%20v%C3%ADa%20Crypto,%20gracias" 
   className='underline'
   target="_blank" 
   rel="noopener noreferrer" 
 >
    Si queres pagar con crypto, Click aquí
 </a>

      <p className="text-sm">Si la formacion no es lo que esperabas, te rembolsamos el 100% de tu dinero, sin preguntas.</p>
    </div>
                  </section>

                </div>
          {/*FIN INICIO */}
        </div>
        {/* FIN HEADER */}

        {/* REFERENCIAS */}
      <section className="w-full text-white text-center">
   
          <h2 className="text-2xl px-20 py-5 sm:text-5xl md:text-7xl font-bold">
            Conoce como otras personas como vos...
          </h2>
          <img src="/discord.png" alt="Discord" className="w-[150px] mb-2 md:w-80 mx-auto" />
          <p className="text-center text-sm px-5 ">
                  Están consiguiendo muy rápido sus influencers gracias a nuestra comunidad de Pitcher Partner
                </p>
          
          <div className="flex flex-col">


           <div className="flex justify-center  ml-1 mb-5 ">
             <div className='flex flex-col'>
                <div className='flex items-center'>
                  <img src="/blanco1.png" alt="Blanca1" className="w-14" />
                  <p className="text-sm font-semibold ml-4">
                    Alexis consiguió 3 en una semana sin tener seguidores ni experiencia previa
                  </p>
                  <img src="/trofeo.png" alt="Trofeo" className="w-12 mr-5 md:w-[10rem] " />
                </div>
                  <img src="/ref.png" alt="Referencia 1" className="w-full px-4 " />
              </div>
           </div>


           <div className="flex justify-center  ml-1 mb-5 ">
             <div className='flex flex-col'>
                <div className='flex items-center'>
                <img src="/trofeo.png" alt="Trofeo" className="w-12 mr-3 md:w-[10rem] " />

                  <p className="text-sm font-semibold ">
                  Paula cerró su primer influencer de 69K en 9 días sin usar Instagram
                  </p>
                  <img src="/blanco2.png" alt="Blanca1" className="w-12" />

                </div>
                <img src="/ref3.png" alt="Referencia 3" className="w-full px-4" />
              </div>
           </div>


            <div className="flex  md:flex-row rounded-lg ">

            <img src="/blanco1.png" alt="Blanca1" className="w-14 absolute mt-[-17px] z-10000" />
            <img src="/ref2.png" alt="Referencia 2" className="ml-9 w-2/3 max-w-sm z-100" />
            <img src="/trofeo.png" alt="Trofeo" className="w-10 z-100000 ml-8 absolute right-6 mt-20 md:w-[10rem] rounded-md mb-3 mx-auto" />
            <p className='text-xs'>Laura cerro su primer influencer sin conocimiento y ya hizo +3100 USD</p>
                </div>


          </div>
                

        </section>
        {/* FIN REFERENCIAS */}

        {/* BULLETS POINTS */}
        <div  className="bg-white rounded-2xl max-w-4xl w-[90%] p-2 md:p-6 mx-5 shadow-lg mt-7">
  <h2 className="mb-5 text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-8 text-[#f9bc66] border-b-4 border-[#f9bc66] whitespace-normal md:whitespace-nowrap animate-typing">
    Ahora... Conoce qué obtendrás dentro:
  </h2>

  <div className="flex flex-col gap-5 p-5 justify-center items-center mb-5">
    {/* Bloque 1 */}
    <div className="flex  md:flex-row gap-5 items-center">
      <img 
        src="/bullet1.png"
        alt="Guía de lanzamiento"
        className="w-[30%] md:w-full max-w-xs sm:max-w-sm h-auto md:h-[13rem] object-contain"
        loading="lazy"
      />
      <div className="text-left text-black tracking-wider">
        <h4 className="text-sm md:text-3xl font-bold mb-2">
          GUÍA DE LANZAMIENTO PREDECIBLE EN 7 DÍAS – Valorada en $970 USD
        </h4>
        <p className="text-sm">
          Aprende a crear lanzamientos predecibles en menos de 7 días con el método Go Pitchering.
        </p>
      </div>
    </div>

    {/* Bloque 2 */}
  <div className="flex  md:flex-row gap-5 items-center">
      <img 
        src="/bullet2.png"
        alt="Crea cursos rentables"
        className="w-[30%] md:w-full max-w-xs sm:max-w-sm h-auto md:h-[13rem] object-contain"
         loading="lazy"
      />
      <div className="text-left text-black tracking-wider">
        <h4 className="text-sm md:text-3xl font-bold mb-2">
          CREA CURSOS RENTABLES SIN EXPERIENCIA – Valorada en $197 USD
        </h4>
        <p className="text-sm">
          Descubre las necesidades de tu audiencia y crea el curso perfecto para vender de forma rápida y sencilla.
        </p>
      </div>
    </div>

    {/* Bloque 3 */}
  <div className="flex  md:flex-row gap-5 items-center">
      <img 
        src="/bullet3.png"
        alt="Prospecta tu primer influencer"
       className="w-[30%] md:w-full max-w-xs sm:max-w-sm h-auto md:h-[13rem] object-contain"
         loading="lazy"
      />
      <div className="text-left text-black tracking-wider">
        <h4 className="text-sm md:text-3xl font-bold mb-2">
          PROSPECTA TU PRIMER INFLUENCER ASEGURADO – VALOR INVALUABLE
        </h4>
        <p className="text-sm">
          Con el estudio de mercado, descubre los problemas de tu audiencia y prospecta de forma segura a tu primer influencer.
        </p>
      </div>
    </div>

    {/* Bloque 4 */}
  <div id="hide-section" className="flex  md:flex-row gap-5 items-center">
  <img 
  src="/bullet4.png"
  alt="Contrato asegurador de lanzamiento"
  className="max-w-[30%] h-[7.5rem] md:max-w-full sm:max-w-sm h-auto md:h-[13rem] object-cover"
  loading="lazy"
/>

      <div className="text-left text-black tracking-wider">
        <h4 className="text-sm md:text-3xl font-bold mb-2">
          CONTRATO ASEGURADOR DE LANZAMIENTO – Valorado en $1500 USD
        </h4>
        <p className="text-sm">
          Asegura tu lanzamiento haciendo que tu profesional cumpla con todo lo necesario para un lanzamiento 100% exitoso.
        </p>
      </div>
    </div>

    {/* Bloque 5 */}
  <div  className="flex  md:flex-row gap-5 items-center">
      <img 
        src="/discord.png"
        alt="Comunidad de acompañamiento"
         className="w-[30%] h-[8rem] p-2 md:w-full max-w-xs sm:max-w-sm h-auto md:h-[13rem] object-contain"
        loading="lazy"
      />
      <div className="text-left text-black tracking-wider">
        <h4 className="text-sm md:text-3xl font-bold mb-2">
          COMUNIDAD DE ACOMPAÑAMIENTO – SU VALOR ES INVALUABLE
        </h4>
        <p className="text-sm">
          Aprovecha la experiencia de nuestra comunidad para potenciar tu negocio.
        </p>
      </div>
    </div>
  </div>
          </div>
        {/*FIN BULLETS POINTS */}

          {/* BONUS */}
        <div   className="flex justify-center items-center relative w-[100%] mt-4 mb-2">
          <div
            className="relative flex flex-col justify-center items-center text-white text-center w-[100%] w-full md:max-w-2xl lg:max-w-4xl "
            style={{
              backgroundImage: "url('/fondobonus.png')",
              backgroundSize: "cover", // Cambia a "contain" si prefieres que se vea la imagen completa
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              minHeight: "700px",
            }}
          >
            <div className="bg-[#f9bc66]/80 w-11/12 md:w-1/2 p-2 rounded-3xl mt-5 md:p-5">
              <h1 className="text-3xl md:text-4xl font-bold p-1 tracking-wider ">
                BONUS TEMPORALES
              </h1>
              <p className="md:text-lg font-bold md:tracking-wider">
                Acelera tus resultados comprando dentro de la primera hora con estos bonus GRATIS
              </p>
            </div>

            <div className="flex flex-col justify-center items-center mt-6 gap-4">
              <img src="/copy1.png" alt="Bonus 1" className="w-full" />
              <img src="/copy2.png" alt="Bonus 2" className="w-full mt-[-35px]" />
            </div>

            <div className="flex justify-center items-center gap-4 flex-wrap mt-6">
              {[
                { label: "Horas", value: hours },
                { label: "Minutos", value: minutes },
                { label: "Segundos", value: seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#013557] text-white p-4 rounded-lg text-center min-w-[80px] max-w-[100px] shadow-md"
                >
                  <span className="block text-2xl font-bold">{item.value}</span>
                  <p className="text-sm">{item.label}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 bg-gradient-to-r from-black via-[#013557] to-black text-white text-xl md:text-2xl font-medium py-2 px-8 rounded-lg w-11/12 md:w-3/4 max-w-2xl mx-auto block mb-1 animate-bounce"
              style={{ backgroundSize: "200%", backgroundPosition: "center" }}
            >
                <span className="text-1xl md:text-3xl block">ACCEDE A TU VENTAJA UNICA</span>
                <span className="text-xs md:text-lg block">Estas 2 herramientas pueden cambiar TODO en tu negocio</span>
            </button>
          </div>
          
              </div>

 
          {/* FIN BONUS */}

          <div className="fixed bottom-4 bg-white right-0  p-3 rounded-full shadow-lg transition-opacity duration-300">
           <img src="/WSPP.png" className='w-10 ' alt="" />
          </div>
     

        {/* FINAL */}
        <div  className="bg-white rounded-2xl max-w-4xl w-[90%] p-2 md:p-6 mx-5 shadow-lg mt-1 ">         
         <div className="rounded-xl p-6 md:p-8 max-w-2xl mx-auto text-center md:text-left">
            <h1 className="text-black text-3xl font-bold">Entonces, esto es lo que obtendrás</h1>
            <h2 className="mb-5 text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-10 text-[#f9bc66] border-b-4 border-[#f9bc66] animate-typing">
              POR LOS PRÓXIMOS 60 MINUTOS:
            </h2>
            <img src="/mockup.png" ref={lastSectionRef} alt="Mockup" className="mb-5 w-full h-auto rounded-lg " />
            <div className="space-y-4 text-base md:text-lg">
              {[
                { name: "SISTEMA DE LANZAMIENTO GO PITCHERING....", value: "$997 usd" },
                { name: "CREACIÓN DE CURSOS CAMPEONES.....", value: "$197 usd" },
                { name: "CONTRATO ASEGURADOR DE LANZAMIENTO....", value: "INVALUABLE" },
                { name: "TU PRIMER INFLUENCER ASEGURADO....", value: "$1500 usd" },
                { name: "COMUNIDAD DE PITCHER PARTNER....", value: "$1500 usd" },
                { name: "COPYS MAGNETICOS", value: "$1500 usd" },
              ].map((item, index) => (
                <div key={index} className="flex flex-wrap  items-center text-center md:text-left">
                  <span className="text-black text-xs font-semibold flex-1 text-start">
                    {item.name}
                  </span>
                  <span className="text-red-600 font-bold text-end">
                    (Valorado en {item.value})
                  </span>
</div>
              ))}
            </div>
            <div className="flex flex-col items-center mt-8">
              <h3 className="text-sm py-1 rounded-lg text-center">
                <span className="text-black block font-bold">
                  PRECIO REGULAR: <span className="line-through">$1988 USD</span>
                </span>
              </h3>
              <h3 className="text-sm py-1 rounded-lg text-center">
                <strong>
                  <span className="text-green-600 text-3xl font-bold">SOLO POR HOY: $97 USD</span>
                </strong>
              </h3>
              <button
                 onClick={() => setIsModalOpen(true)}
                className="flex justify-center bg-gradient-to-r from-black via-[#013557] to-black text-white text-md gap-2 md:text-2xl font-medium py-4 px-8 rounded-lg w-full max-w-md mt-5 transition-all duration-300 hover:scale-105"
              >
                 Accede al entrenamiento ahora 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
</svg>

              </button>
              <a 
   href="https://api.whatsapp.com/send?phone=5493516361261&text=Hola,%20quiero%20inscribirme%20a%20Go%20Pitchering%20v%C3%ADa%20Crypto,%20gracias" 
   className='underline'
   target="_blank" 
   rel="noopener noreferrer" 
 >
    Si queres pagar con crypto, Click aquí
 </a>

              <img src="/GARANTIA.png" className='mt-3' alt="" />
            </div>
          </div>


          
          {/* FOOTER */}
          <footer className="mt-1 text-center text-sm text-gray-500 p-4">
            <p className="mb-2">© 2025 Go Pitchering. All Rights Reserved.</p>
            <p className="max-w-2xl mx-auto">
              Descargo de Responsabilidad: Este producto no garantiza la obtención de resultados. Las referencias al desarrollo de una determinada estrategia no deben ser interpretadas como una garantía de resultados. Esta página no es parte de la página de Meta o de Meta, Inc.
            </p>
          </footer>


        </div>
        {/*FIN FINAL */}

    </div>
    </>
  );
}
