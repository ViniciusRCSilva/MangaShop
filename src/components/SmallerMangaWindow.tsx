interface SmallerMangaWindowProps{
    image?: String,
    title?: String,
    tag?: String
}

export function SmallerMangaWindow({ image, title, tag }: SmallerMangaWindowProps){
    return(
        <div className="flex flex-col w-[200px] mr-5 border-2 rounded-lg cursor-pointer hover:border-red-600 transition-all md:hover:scale-105">
            <div style={{backgroundImage: `url(${image})`}} className="w-[196px] h-20 bg-[url(backgroundImage)] rounded-t-md bg-center bg-cover"></div>
            <span className="text-lg pl-2 font-bold">{title}</span>
            <div className="bg-red-600 h-1"></div>
            <span className="text-xs p-2">{tag}</span>
        </div>
    )
}