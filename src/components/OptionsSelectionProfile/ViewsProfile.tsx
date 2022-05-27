import { MangaWindow } from "../MangaWindow";

export function ViewsProfile(){
    return(
        <div className="flex flex-col md:flex-row w-full justify-center items-center">
            <MangaWindow 
                image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'}
                title={'Berserk'} 
                tag={'Fantasia Sombria | Alta Fantasia...'} 
            />

            <MangaWindow 
                image={'https://images-na.ssl-images-amazon.com/images/I/81U8UDy4ojL.jpg'}
                title={'Baki'} 
                tag={'Luta...'} 
            />
        </div>
    )
}