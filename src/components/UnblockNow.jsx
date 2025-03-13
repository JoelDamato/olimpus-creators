export default function UnblockNow({ textSize = "text-[14px] md:text-[40px]", padding = "mr-2 md:mr-9" }){
    return(<>
     <div className="relative w-full max-w-4xl">
            <img src="/CTA-1.PNG" alt="CTA 1" className="w-full" />
            <div className={`absolute inset-0 flex items-center justify-end ${padding} text-white font-bold font-cincel ${textSize}`} >
              DESBLOQUEA AHORA (USD 14.99)
            </div>
          </div>
          </>)
}