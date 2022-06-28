interface MangaWindowProps{
    image?: String,
    title?: String,
    desc?: String,
    tag?: String
}

export function MangaWindow({ image, title, desc, tag }: MangaWindowProps){
    return(
        <div className="flex justify-center">
            <div className="flex flex-col w-[200px] border-2 mb-4 md:mb-0 rounded-lg cursor-pointer hover:border-red-600 transition-all md:hover:scale-105">
                <div style={{backgroundImage: `url(${image})`}} className="w-[196px] h-20 bg-[url(backgroundImage)] rounded-t-md bg-center bg-cover"></div>
                <span className="text-lg pl-2 font-bold uppercase">{title}</span>
                <span className="text-xs pl-3 pr-3 pb-2 pt-2 text-justify">{desc}</span>
                <div className="bg-red-600 h-1"></div>
                <span className="text-xs p-2">{tag}</span>
            </div>
        </div>
    )
}