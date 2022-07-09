import { Tag } from "phosphor-react";

export function CouponProfile(){
    return(
        <div className="flex flex-col h-full w-full items-start">
            <div className="flex flex-row items-center font-bold">
                <Tag className="text-lg" weight="bold"/>
                <span className="text-lg ml-1">Cupons:</span>
            </div>

            <div className="flex flex-col w-full h-full items-center justify-center mt-4 overflow-x-auto scrollbar-thumb-red-600 scrollbar-track-transparent scrollbar-thin">
                <img src="../src/img/receipt_re_fre3.svg" alt="sem_cupons" className="w-32 md:w-44" />
                <span>Você não possui cupons no momento!</span>
            </div>
        </div>
    )
}