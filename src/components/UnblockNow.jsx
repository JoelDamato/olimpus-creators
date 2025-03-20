export default function UnblockNow({
  textPart1= "DESBLOQUEA AHORA (USD 14.99)",
  textPart2, 
  textPart3, 
  textSize = "text-[14px] md:text-[40px]", 
  padding = "mr-2 md:mr-9" }){

  const splitText = textPart2?.split("AHORA");

    return(<>
     <div className="relative w-full max-w-4xl">
            <img src="/CTA-1.PNG" alt="CTA 1" className="w-full" />
            <div className={`absolute inset-0 flex items-center justify-end ${padding} text-white font-bold font-cincel ${textSize}`} >
            {!textPart2 && !textPart3 ? (
            textPart1
          ) : (
            <div className="flex flex-col">
              <p className="text-[16px]">{textPart2}</p>
              <p className="text-[13px] font-light">{textPart3}</p>
            </div>
          )}
            </div>
          </div>
          </>)
}