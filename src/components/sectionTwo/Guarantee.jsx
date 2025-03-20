export default function Guarantee(params) {
    return(
        <>
    <div className="w-full flex md:flex-row items-center justify-center gap-4 p-3 md:p-6">
      {[
        { img: "/TIEMPO.png", text: "ACCESO INSTANTÁNEO" },
        { img: "/DEVOLUCION.png", text: "GARANTÍA DEVOLUCIÓN DE 7 DÍAS SIN PREGUNTAS" },
        { img: "/SEGURO.png", text: "PAGO SEGURO VÍA HOTMART" }
      ].map((item, index) => (
        <div key={index} className="flex flex-row items-center text-center">
          <img src={item.img} alt={item.text} className="w-9 md:w-13 h-auto" />
          <p className="text-white text-start text-[9px] md:text-sm  font-cincel p-1">{item.text}</p>
        </div>
      ))}
    </div>
        </>
    )
    
}