import { CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { MangaWindow } from "../components/MangaWindow";

export function Home(){
    return(
        <div>
            <Header />

            <div className="flex flex-col p-6 pt-[150px] dark:bg-gray-900 dark:text-zinc-50 md:h-[100vh]">
                <span className="flex flex-row items-center text-xl"><CaretRight /> Mangás recomendados para<span className="text-red-600 font-bold ml-2">você</span></span>
                <div className="flex flex-col md:grid md:grid-cols-4 md:gap-6 mt-6 mb-6 items-center">
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

                <span className="flex flex-row items-center text-xl"><CaretRight /> Veja também:</span>
                <div className="flex flex-col md:grid md:grid-cols-4 md:gap-6 mt-6 mb-6 items-center">
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
                        image={'https://sm.ign.com/ign_br/screenshot/default/36626_c6xt.jpg'}
                        title={'Shingeki No Kyojin'} 
                        desc={'Shingeki no Kyojin também conhecido pelo título em inglês Attack on Titan, é uma série de mangá...'}
                        tag={'Fantasia | Luta...'} 
                    />

                    <MangaWindow 
                        image={'https://images-na.ssl-images-amazon.com/images/I/91gngOOTDcL.jpg'}
                        title={"JoJo's Bizarre Adventures"} 
                        desc={'O mangá conta a história da família Joestar e suas lutas contra forças sobrenaturais. Ele é divido em 8 partes...'}
                        tag={'Fantasia | Luta...'} 
                    />
                    
                    <MangaWindow 
                        image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2019/02/yugioh-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'}
                        title={'Yu-Gi-Oh!'} 
                        desc={'Yu-Gi-Oh! é uma série de mangá sobre jogo escrita e ilustrada por Kazuki Takahashi.'}
                        tag={'Fantasia | Estratégia...'} 
                    />

                    <MangaWindow 
                        image={'https://img1.ak.crunchyroll.com/i/spire4/5568ffb263f6bcba85a639980b80dd9a1612993223_full.jpg'}
                        title={'Naruto'} 
                        desc={'conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage...'}
                        tag={'Fantasia | Luta...'} 
                    />

                    <MangaWindow 
                        image={'https://www.einerd.com.br/wp-content/uploads/2014/12/death-note-the-musical-890x668.jpeg'}
                        title={'Death Note'} 
                        desc={'Death Note é uma série de mangá escrita por Tsugumi Ohba e ilustrada por Takeshi Obata.'}
                        tag={'Investigação | Shinigami...'} 
                    />
                </div>
            </div>
        </div>
    )
}