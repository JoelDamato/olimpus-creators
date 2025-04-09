import { ColumnBg2 } from "../components/sectionThree/ColumnBg2";
import Steps from "../components/sectionThree/Steps";
import Guarantee from "../components/sectionTwo/Guarantee";

export function Package2() {
  return (
    <>
      <div
         className="overflow-hidden bg-secondary bg-no-repeat bg-left-top bg-contain "
         style={{
           backgroundImage: "url('https://i.ibb.co/C3HSQcSB/COLUMNA-1.png')",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "-45px top",
           zIndex: 30,
         }}
      >
        <Steps package2 />
        <ColumnBg2  package2/>
        <div className=" w-full">
          <Guarantee package2 />
        </div>
      </div>
    </>
  );
}
