import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { MangaWindow } from "../components/MangaWindow";

export function Home(){
    return(
        <div>
            <Header />

            <div className="flex flex-col p-6 pt-[150px] dark:bg-gray-900 dark:text-zinc-50 h-[100vh]">
                <span className="flex flex-row items-center text-xl"><CaretRight /> Mangás recomendados para<span className="text-red-600 font-bold ml-2">você</span></span>
                <div className="flex flex-col md:flex-row mt-6 items-center md:justify-around">
                    <Link to={'/pagina'}>
                        <MangaWindow 
                            image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'}
                            title={'Berserk'} 
                            desc={'é uma série de mangá escrita e ilustrada por Kentaro Miura. Situado em um mundo de fantasia sombria inspirado na Europa ...'}
                            tag={'Fantasia Sombria | Alta Fantasia...'} 
                        />
                    </Link>

                    <MangaWindow 
                        image={'https://images-na.ssl-images-amazon.com/images/I/81U8UDy4ojL.jpg'}
                        title={'Baki'} 
                        desc={'Baki Hanma é um estudante geralmente feliz com um hobby bastante estranho; ele gosta de lutar...'}
                        tag={'Luta...'} 
                    />

                    <MangaWindow 
                        image={'https://static.mangajar.com/posters/1367/XDauD7DlRN1iJct96BBdaHcf7nx78yJZyFsRyLIK.png'}
                        title={'Kengan Ashura'} 
                        desc={'Desde o período Edo do Japão, existem arenas de gladiadores em certas áreas...'}
                        tag={'Luta...'} 
                    />

                    <MangaWindow 
                        image={'https://images-na.ssl-images-amazon.com/images/I/51bBdrgiEfL._SX341_BO1,204,203,200_.jpg'}
                        title={'Dragon Ball'} 
                        desc={'A história de Dragon Ball segue a vida de Son Goku, um menino com rabo de macaco baseado na...'}
                        tag={'Fantasia | Luta...'} 
                    />
                </div>
            </div>
        </div>
    )
}