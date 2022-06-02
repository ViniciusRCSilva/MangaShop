import { Header } from "../components/Header";

import { Select } from '@chakra-ui/react'
import { Heart, ShoppingCart, Truck } from "phosphor-react";

interface MangaPageProps{
    title?: String,
    price?: String,
    desc?: String,
    image?: String
}

export function MangaPage({ image, desc, price, title }: MangaPageProps){
    return(
        <div>
            
            <Header/>

            <div className="flex flex-col md:flex-row justify-around items-center w-full h-[80vh]">

                <div className="flex flex-col w-[90vw] md:w-[500px]">
                    <span className="text-xl font-bold">{title}</span>

                    <div className="rounded-t-xl">
                        <div style={{backgroundImage: `url(${image})`}} className="md:w-full h-20 md:h-[400px] bg-[url(backgroundImage)] rounded-t-md bg-center bg-cover"></div>
                    </div>

                    <div className="border-2 border-red-600 rounded-b-xl p-2">
                        <span>{desc}</span>
                    </div>
                </div>

                <div className="flex flex-col items-center w-[90vw] md:w-[500px]">

                    <div className="flex flex-row w-full border-2 border-red-600 rounded-t-3xl p-4 justify-between">
                        <div className="flex flex-col">
                            <span className="mb-2 font-bold text-xl">R$ {price}</span>
                            <span className="mb-1">Edições:</span>

                            <Select 
                                color='white'
                                className="border-red-600 rounded-3xl text-black pl-5 pr-5 cursor-pointer focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none"
                            >
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </Select>
                        </div>

                        <div>
                            <Heart className="h-8 w-8 p-1 rounded-full border-2 justify-center border-black cursor-pointer hover:text-red-600 hover:border-red-600 transition-colors"/>
                        </div>

                    </div>
                    <button 
                        type="submit"
                        className="flex flex-row w-full items-center bg-red-600 hover:bg-red-500 transition-colors rounded-b-3xl text-zinc-50 pr-4 pl-4 pt-2 pb-2 justify-center"
                    >
                        <ShoppingCart/>
                        <span className="ml-2">Adicionar ao carrinho</span>
                    </button>

                    <div className="flex flex-row w-[90vw] md:w-[500px] border-2 border-red-600 rounded-3xl items-center justify-center p-3 mt-10">
                        <Truck className="w-6 h-6"/>
                        <span className="mr-2 ml-2">Calcular Frete:</span>
                        <input 
                            placeholder="00000-000" 
                            className="border-1 rounded-3xl w-32 md:auto focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none" 
                            type="tel"
                            pattern="[0-9]{5}-[0-9]{3}"
                            maxLength={9}
                        />
                        
                        <button 
                            type="submit" 
                            className="bg-red-600 hover:bg-red-500 ml-2 transition-colors rounded-3xl text-zinc-50 pl-4 pr-4 pt-2 pb-2 focus:border-red-600 focus:ring-red-600 focus:ring-1 focus:outline-none"
                        >
                            OK
                        </button>
                    </div>

                </div>
                
            </div>

        </div>
    )
}