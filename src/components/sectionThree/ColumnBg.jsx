import Guarantee from "../sectionTwo/Guarantee";
import UnblockNow from "../UnblockNow";
import Prices from "./Prices";
import { TextsList } from "./TextsList";

export function ColumnBg() {
  return (
    <>
      <div className="bg-secondary text-white md:p-8">
        <div
          className="relative w-full flex flex-col items-center p-1 text-center bg-cover bg-top"
          style={{ backgroundImage: "url('/COLUMNAS.png')", height: "67vh" }}
          //si le pongo mas vh se pierde el texto de la imagen
        >
          <TextsList />
          <Prices/>
          <div className="w-5/6">
            <UnblockNow
              textPart2={"DESBLOQUEA EL OLIMPO AHORA"}
              textPart3={"INCLUYE ACTUALIZACIONES SEMANALES"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
