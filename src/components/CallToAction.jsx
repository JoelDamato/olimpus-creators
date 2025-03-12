export default function CallToAction(){
    return(
        <>
        <div className="flex flex-row md:flex-row items-center justify-center mt-6 w-full gap-2">
        {/* Left Side - Hermes Image */}
        <div className="w-1/3 md:w-1/3 flex justify-center">
          <img src="/HERMES-MAC-AZUL.PNG" alt="Hermes con laptop" className="w-full max-w-sm" />
        </div>
        
        {/* Right Side - CTA Images */}
        <div className="w-full md:w-2/3 flex flex-col items-center gap-6">
          <img src="/CTA-1.PNG" alt="CTA 1" className="w-full max-w-4xl" />
          <img src="/CTA-2.PNG" alt="CTA 2" className="w-full max-w-4xl" />
        </div>
      </div>
        </>
    )
}