export default function Prices() {
    return (
      <div className="w-full flex text-center items-center mt-[-10px]">
        <div className="div">
        <p className="text-red text-[23px] font-extrabold line-through font-bebas">
          VALOR NORMAL: 403 USD
          </p>
        </div>
        <div className="div">
        <p className="text-successGreen text-[2.5rem] font-extrabold font-bebas">
          14.99 USD
          </p>
        <p className="text-successGreen text-sm font-bold font-bebas">
          OFERTA LIMITADA POR LANZAMIENTO
          </p>
        </div>
      </div>
    );
  }
  