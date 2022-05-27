import { MangaWindow } from "../MangaWindow";

export function OrderedProfile(){
    return(
        <div className="flex flex-row w-full items-center">
            <MangaWindow 
                image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'}
                title={'Berserk'} 
                tag={'Fantasia Sombria | Alta Fantasia...'} 
            />
        </div>
    )
}