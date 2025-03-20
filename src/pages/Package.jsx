import { ColumnBg } from "../components/sectionThree/ColumnBg";
import  Steps  from "../components/sectionThree/Steps";
import Guarantee from "../components/sectionTwo/Guarantee";

export function Package(){

    return(
    <>
    <Steps />
    <ColumnBg/>
    <div className="bg-secondary w-full p-1 ">
            <Guarantee />
    </div>
    </>
    )
}