import { ColumnBg } from "../components/sectionThree/ColumnBg";
import Guarantee from "../components/sectionTwo/Guarantee";
import UnblockNow from "../components/UnblockNow";


export function Package(){

    return(<>
    <UnblockNow/>
    <UnblockNow/>
    <ColumnBg/>
    <div className="bg-olimpusBlue w-full p-1 ">
            <Guarantee />
    </div>
    </>)
}