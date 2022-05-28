import { Heart } from "phosphor-react";
import { SmallerMangaWindow } from "../SmallerMangaWindow";

export function FavProfile(){
    return(
        <div className="flex flex-col h-full w-full items-start">
            <div className="flex flex-row items-center font-bold">
                <Heart className="text-lg" weight="bold"/>
                <span className="text-lg ml-1">Favoritos:</span>
            </div>

            <div className="flex flex-row w-full h-full items-center mt-4 overflow-x-auto scrollbar-thumb-red-600 scrollbar-track-transparent scrollbar-thin">
                <SmallerMangaWindow 
                    image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'}
                    title={'Berserk'} 
                    tag={'Fantasia Sombria | Alta Fantasia...'} 
                />

                <SmallerMangaWindow 
                    image={'https://images-na.ssl-images-amazon.com/images/I/81U8UDy4ojL.jpg'}
                    title={'Baki'} 
                    tag={'Luta...'} 
                />

                <SmallerMangaWindow 
                    image={'https://static.mangajar.com/posters/1367/XDauD7DlRN1iJct96BBdaHcf7nx78yJZyFsRyLIK.png'}
                    title={'Kengan Ashura'} 
                    tag={'Luta...'} 
                />

                <SmallerMangaWindow 
                    image={'https://images-na.ssl-images-amazon.com/images/I/51bBdrgiEfL._SX341_BO1,204,203,200_.jpg'}
                    title={'Dragon Ball'} 
                    tag={'Fantasia | Luta...'} 
                />

                <SmallerMangaWindow 
                    image={'https://images-na.ssl-images-amazon.com/images/I/51bBdrgiEfL._SX341_BO1,204,203,200_.jpg'}
                    title={'Dragon Ball'} 
                    tag={'Fantasia | Luta...'} 
                />

                <SmallerMangaWindow 
                    image={'https://images-na.ssl-images-amazon.com/images/I/51bBdrgiEfL._SX341_BO1,204,203,200_.jpg'}
                    title={'Dragon Ball'} 
                    tag={'Fantasia | Luta...'} 
                />
            </div>
        </div>
    )
}