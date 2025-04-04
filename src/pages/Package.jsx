import { ColumnBg } from "../components/sectionThree/ColumnBg";
import Steps from "../components/sectionThree/Steps";
import Guarantee from "../components/sectionTwo/Guarantee";

export function Package() {
  return (
    <>
    <div className="overflow-hidden">
      <Steps />
      <ColumnBg />
      <div className="bg-secondary w-full">
        <Guarantee />
      </div>
      </div>
    </>
  );
}
