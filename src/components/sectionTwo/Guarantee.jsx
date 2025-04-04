export default function Guarantee(params) {
    return(
        <>
    <div className="w-full flex md:flex-row items-center justify-center gap-2 p-3 md:p-6">
      {[
        { img: "/TIEMPO.png", text: "ACCESO INSTANTÁNEO", width: "26%"},
        { img: "/DEVOLUCION.png", text: "GARANTÍA DEVOLUCIÓN DE 7 DÍAS SIN PREGUNTAS" , width: "42%"},
        { img: "/SEGURO.png", text: "PAGO SEGURO VÍA HOTMART" , width: "30%"}
      ].map((item, index) => (
        <div key={index} className="flex flex-row items-center text-center" style={{width: item.width}}>
          <img src={item.img} alt={item.text} className="w-9 p-1 md:w-13 h-auto" />
          <p className="text-white text-start text-[9px] md:text-sm  font-cincel ">{item.text}</p>
        </div>
      ))}
    </div>
        </>
    )
    
}