export default function Prices({ package2 = false }) {
  return (
    <>
      {!package2 ? (
        <div className="w-full flex text-center items-center mt-[-15px]">
          <div className="w-1/2">
            <p className="text-red text-[24px] line-through font-bebas">
              VALOR NORMAL: 403 USD
            </p>
          </div>
          <div className="w-1/2 space-y-[-20px]">
            <p className="text-successGreen text-[3.5rem] font-bebas">
              14.99 USD
            </p>
            <p className="text-successGreen text-sm font-bebas">
              OFERTA LIMITADA POR LANZAMIENTO
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full flex text-center items-center justify-center mt-[-15px]">
          <div className="w-[80%] flex items-center">
            <div className="w-1/2">
              <p
                className={`text-red ${
                  package2 ? "text-lg" : "text-[24px]"
                } line-through font-bebas`}
              >
                VALOR NORMAL: 403 USD
              </p>
            </div>
            <div className="w-1/2 space-y-[-20px]">
              <p
                className={`text-successGreen ${
                  package2 ? "text-[3rem]" : "text-[3.5rem]"
                }  font-bebas`}
              >
                14.99 USD
              </p>
              <p
                className={`text-successGreen ${
                  package2 ? "text-[12px]" : "text-sm"
                } font-bebas`}
              >
                OFERTA LIMITADA POR LANZAMIENTO
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
