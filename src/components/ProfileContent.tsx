import { ClockCounterClockwise, Heart, ShoppingBagOpen, Tag, UserList } from "phosphor-react";
import { InfoProfile } from "./OptionsSelectionProfile/InfoProfile";

export interface ProfileContentProps{
    name: String,
    nick: String,
    address: String,
    number: String,
}

export function ProfileContent({ name, nick, address, number }: ProfileContentProps){
    return(
        <div className="flex flex-col items-start md:items-center justify-around mt-10 w-full h-[80vh]">

            <div className="flex flex-row ml-6 md:w-[50%] md:ml-0">
                <div className="rounded-full bg-red-600 w-36 h-36">
                    <img src="" alt="" />
                </div>

                <div className="flex flex-col ml-6">
                    <span className="text-xl font-bold">{name}</span>
                    <span className="text-sm">@{nick}</span>
                </div>
            </div>

            <div className="flex flex-col w-full md:w-[50%] h-full rounded-xl p-6">

                <div className="flex flex-col mt-3">
                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col items-center hover:text-red-600 cursor-pointer transition-colors">
                            <UserList className="text-4xl"/>
                            <span className="hidden md:flex">Informações</span>
                        </div>
                        <div className="flex flex-col items-center hover:text-red-600 cursor-pointer transition-colors">
                            <Heart className="text-4xl"/>
                            <span className="hidden md:flex">Favoritos</span>
                        </div>
                        <div className="flex flex-col items-center hover:text-red-600 cursor-pointer transition-colors">
                            <ClockCounterClockwise className="text-4xl"/>
                            <span className="hidden md:flex">Visualizados</span>
                        </div>
                        <div className="flex flex-col items-center hover:text-red-600 cursor-pointer transition-colors">
                            <Tag className="text-4xl"/>
                            <span className="hidden md:flex">Cupons</span>
                        </div>
                        <div className="flex flex-col items-center hover:text-red-600 cursor-pointer transition-colors">
                            <ShoppingBagOpen className="text-4xl"/>
                            <span className="hidden md:flex">Pedidos</span>
                        </div>
                    </div>
                </div>

                {/* Quando o usuário clicar em informações */}
                <div className="flex flex-col border-2 mt-3 rounded-lg h-full p-4">
                    <InfoProfile address={address} number={number}/>
                </div>
            </div>
        </div>
    )
}