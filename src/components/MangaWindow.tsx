interface MangaWindowProps{
    image?: String,
    title?: String,
    desc?: String,
    tag?: String
}

export function MangaWindow(props: MangaWindowProps){
    return(
        <div className="flex flex-col w-[200px] border-2 rounded-lg cursor-pointer hover:border-red-600 transition-all hover:scale-105">
            <div style={{backgroundImage: `url(${props.image})`}} className="w-[196px] h-20 bg-[url(backgroundImage)] rounded-t-md bg-center bg-cover"></div>
            <span className="text-lg pl-2 font-bold">{props.title}</span>
            <span className="text-xs pl-3 pr-3 pb-2 pt-2 text-justify">{props.desc}</span>
            <div className="bg-red-600 h-1"></div>
            <span className="text-xs p-2">{props.tag}</span>
        </div>
    )
}