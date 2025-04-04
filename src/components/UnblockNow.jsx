export default function UnblockNow({
  textPart1= "DESBLOQUEA AHORA (USD 14.99)",
  textPart2, 
  textPart3, 
  textSize = "text-[12px] md:text-[40px]", 
  padding = "mr-3 md:mr-9" }){

  const splitText = textPart2?.split("AHORA");

    return(<>
     <a
      href="https://pay.hotmart.com/F98750477I?checkoutMode=10"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-4xl"
    >
     <div className="relative w-full max-w-4xl">

            <img src="https://i.ibb.co/4ZVTPYyC/CTA-1.png" alt="CTA 1" className="w-full" />

            <div className={`absolute inset-0 flex items-center justify-end ${padding} text-white font-bold font-cincel ${textSize}`} >
            {!textPart2 && !textPart3 ? (
            textPart1
          ) : (
            <div className="flex flex-col">
              <p className="text-[14px]">{textPart2}</p>
              <p className="text-[12px] font-light">{textPart3}</p>
            </div>
          )}
            </div>
          </div>
          </a>
          </>)
}