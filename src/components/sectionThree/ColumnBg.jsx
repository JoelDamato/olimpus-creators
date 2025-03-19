import Guarantee from "../sectionTwo/Guarantee";
import UnblockNow from "../UnblockNow";
import Prices from "./Prices";
import { TextsList } from "./TextsList";

export function ColumnBg() {
  return (
    <>
      <div className="bg-olimpusBlue text-white md:p-8">
        <div
          className="relative w-full flex flex-col items-center p-1 text-center bg-cover bg-top"
          style={{ backgroundImage: "url('/COLUMNAS.png')", height: "67vh" }}
        >
          <TextsList />
          <Prices/>
          <div className="w-5/6">
            <UnblockNow
              textPart2={"DESBLOQUEA EL OLIMPO AHORA"}
              textPart3={"INCLUYE ACTUALIZACIONES SEMANALES"}
            />
          </div>

          <div className="w-3/4">
            <Guarantee />
          </div>
        </div>
      </div>
    </>
  );
}
