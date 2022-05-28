import { Tag } from "phosphor-react";

export function CouponProfile(){
    return(
        <div className="flex flex-col h-full w-full items-start">
            <div className="flex flex-row items-center font-bold">
                <Tag className="text-lg" weight="bold"/>
                <span className="text-lg ml-1">Cupons:</span>
            </div>

            <div className="flex flex-row w-full h-full items-center mt-4 overflow-x-auto scrollbar-thumb-red-600 scrollbar-track-transparent scrollbar-thin">
                
            </div>
        </div>
    )
}