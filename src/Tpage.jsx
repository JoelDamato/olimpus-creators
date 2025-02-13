import { useState, useEffect, useRef } from "react";

const CheckoutPage = () => {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    let currentProgress = 0;
    intervalRef.current = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      if (currentProgress >= 90) {
        clearInterval(intervalRef.current);
      }
    }, 50);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div
    className="min-h-screen flex flex-col items-center justify-center overflow-x-hidden"
    style={{
      background: "linear-gradient(to right, black, #013557 50%, black 100%)",
      fontFamily: "Lato, sans-serif",
    }}
  >
    <div className="min-h-screen bg-white text-white flex w-[90%] rounded-lg flex-col items-center mt-5 mb-2 p-4">
    {/* Barra de progreso */}
    <div className="w-full max-w-md p-4 rounded-xl text-center">
      <p className="text-red-500 font-bold">🔴 ¡TU ACCESO ESTÁ CASI LISTO!</p>
      <div className="w-full bg-gray-700 rounded-full h-6 mt-2 relative overflow-hidden">
        <div
          className={`bg-red-500 h-full flex items-center justify-center text-sm font-bold rounded-full transition-all duration-1000 ${
            progress > 50 ? "text-white" : "text-red-500"
          }`}
          style={{ width: `${progress}%`, textShadow: "0px 0px 4px rgba(0,0,0,0.5)" }}
        >
          {progress}%
        </div>
      </div>
    </div>

      {/* Mensaje principal */}
      <div className="text-center mt-6">
        <h2 className="text-3xl text-black font-bold">✋ ¡ESPERA! AÚN NO HAS TERMINADO...</h2>
        <p className="mt-2 text-black text-black font-medium">✅ TU PAGO HA SIDO RECIBIDO CON ÉXITO, PERO FALTA UN PASO MÁS PARA ACCEDER A TU CURSO...</p>
        <p className="mt-4 text-3xl text-black font-bold">👇 IMPORTANTE 👇</p>
      </div>

      {/* Formulario embed de Notion */}
      <div className="w-full max-w-md mt-6">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScP6QmTIdq0-OZRAsdRkGPixOLCkXcYP8kS8f1Qvtc3HIQrVA/viewform?embedded=true" className="w-full h-[70rem]">Cargando…</iframe>
      </div>

      {/* Mensaje y botón de WhatsApp */}
      <p className="text-md text-black font-bold mt-4 text-center px-4">
        💡 DESPUÉS DE ENVIAR EL FORMULARIO SI QUIERES ENVÍANOS UN MENSAJE DIRECTO EN WHATSAPP PARA AGILIZAR EL PROCESO O SIMPLEMENTE ESPERA A QUE TE LLEGUE A TU EMAIL
      </p>
      
      <button
               
                className="flex justify-center bg-gradient-to-r from-black via-[#013557] to-black text-white text-md gap-2 md:text-2xl font-medium py-4 px-8 rounded-lg w-full max-w-md mt-5 transition-all duration-300 hover:scale-105"
              ><svg
              height="40px"
              width="40px"
              viewBox="0 0 58 58"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg"
              
            >
              <path d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5 S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"></path>
              <path
                fill="#000000"
                d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42 c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242 c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169 c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097 c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"
              ></path>
            </svg>       <a 
   href="https://api.whatsapp.com/send?phone=5493516361261&text=¡Click%20aquí%20para%20confirmar%20mi%20compra!" 
   className='underline'
   target="_blank" 
   rel="noopener noreferrer" 
 >
    ¡Click aquí para confirmar mi compra!
 </a> 

</button>

    </div>
    </div>
  );
};

export default CheckoutPage;
