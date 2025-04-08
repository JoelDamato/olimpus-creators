import Guarantee from "../sectionTwo/Guarantee";
import UnblockNow from "../UnblockNow";
import Prices from "./Prices";
import { TextsList } from "./TextsList";

export function ColumnBg2({package2 = false}) {
  return (
    <>
      <div className={`${package2? "bg-transparent" : "bg-secondary"} text-white md:p-8 z-10`}>
          <TextsList package2/>
          <Prices/>
          <div className="w-5/6" id="cta-final" >
            <UnblockNow
             id="cta-final" 
              textPart2={"DESBLOQUEA EL OLIMPO AHORA"}
              textPart3={"INCLUYE ACTUALIZACIONES SEMANALES"}
            />
          </div>
        </div>
    </>
  );
}
