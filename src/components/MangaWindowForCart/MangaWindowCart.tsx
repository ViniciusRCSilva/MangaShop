import { X } from "phosphor-react";

interface MangaWindowCartProps{
    image?: String,
    title?: String,
    edition?: String,
}

export function MangaWindowCart({ image, title, edition }: MangaWindowCartProps){
    return(
        <div className="flex flex-row items-center w-full justify-between border-red-600 border-2 rounded-full">
            <div className="flex flex-row items-center">
                <div style={{backgroundImage: `url(${image})`}} className="w-[80px] md:w-[196px] h-20 bg-[url(backgroundImage)] rounded-l-full bg-center bg-cover"></div>
                <div className="flex flex-col md:flex-row items-start md:items-end ml-4">
                    <span className="text-lg md:text-2xl font-bold uppercase">{title}</span>
                    <span className="text-sm md:ml-4">Edição: {edition}</span>
                </div>
            </div>

            <div className="flex w-[60px] h-20">
                <button className="flex justify-center items-center text-zinc-50 text-2xl bg-red-600 hover:bg-red-500 transition-colors rounded-r-full w-full"><X/></button>
            </div>
        </div>
    )
}