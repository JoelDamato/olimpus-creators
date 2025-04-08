import Guarantee from "../sectionTwo/Guarantee";
import UnblockNow from "../UnblockNow";
import Prices from "./Prices";
import { TextsList } from "./TextsList";

export function ColumnBg2({package2 = false}) {
  return (
    <>
      <div className="bg-transparent text-white md:p-8 z-10">
          <TextsList package2/>
          <Prices package2/>
          <div className="w-full flex justify-center" id="cta-final" >
          <div className="w-5/6 " id="cta-final" >
            <UnblockNow
             id="cta-final" 
              textPart2={"DESBLOQUEA EL OLIMPO AHORA"}
              textPart3={"INCLUYE ACTUALIZACIONES SEMANALES"}
            />
          </div>
          </div>
        </div>
    </>
  );
}
