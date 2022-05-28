import { ShoppingBagOpen } from "phosphor-react";
import { SmallerMangaWindow } from "../SmallerMangaWindow";

export function OrderedProfile(){
    return(
        <div className="flex flex-col h-full w-full items-start">
            <div className="flex flex-row items-center font-bold">
                <ShoppingBagOpen className="text-lg" weight="bold"/>
                <span className="text-lg ml-1">Pedidos:</span>
            </div>

            <div className="flex flex-row w-full h-full items-center mt-4 overflow-x-auto scrollbar-thumb-red-600 scrollbar-track-transparent scrollbar-thin">
                <SmallerMangaWindow 
                    image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'}
                    title={'Berserk'} 
                    tag={'Fantasia Sombria | Alta Fantasia...'} 
                />
            </div>
        </div>
    )
}