import { ShoppingCart } from "phosphor-react";
import { Header } from "../components/Header";
import { MangaWindowCart } from "../components/MangaWindowForCart/MangaWindowCart";

export function Cart(){
    return(
        <div>
            <Header />

            <div className="flex flex-col p-6 pt-[150px] w-full h-full">
                <span className="flex flex-row items-center text-xl"><ShoppingCart className="mr-1 text-red-600"/>Itens no Carrinho</span>

                <div className="border-2 mt-3 rounded-lg h-full p-4">
                    <div className="flex flex-col w-full h-full mt-4 scrollbar-thumb-red-600 scrollbar-track-transparent scrollbar-thin">
                        <MangaWindowCart 
                            image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'}
                            title={'Berserk'} 
                            edition={'1'} 
                        />

                        <MangaWindowCart 
                            image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'}
                            title={'Berserk'} 
                            edition={'2'} 
                        />

                        <MangaWindowCart 
                            image={'https://images-na.ssl-images-amazon.com/images/I/81U8UDy4ojL.jpg'}
                            title={'Baki'} 
                            edition={'1'} 
                        />

                        <MangaWindowCart 
                            image={'https://static.mangajar.com/posters/1367/XDauD7DlRN1iJct96BBdaHcf7nx78yJZyFsRyLIK.png'}
                            title={'Kengan Ashura'} 
                            edition={'1'} 
                        />

                        <MangaWindowCart 
                            image={'https://images-na.ssl-images-amazon.com/images/I/51bBdrgiEfL._SX341_BO1,204,203,200_.jpg'}
                            title={'Dragon Ball'} 
                            edition={'1'} 
                        />

                        <MangaWindowCart 
                            image={'https://images-na.ssl-images-amazon.com/images/I/51bBdrgiEfL._SX341_BO1,204,203,200_.jpg'}
                            title={'Dragon Ball'} 
                            edition={'2'} 
                        />

                        <MangaWindowCart 
                            image={'https://images-na.ssl-images-amazon.com/images/I/51bBdrgiEfL._SX341_BO1,204,203,200_.jpg'}
                            title={'Dragon Ball'} 
                            edition={'3'} 
                        />

                        <MangaWindowCart 
                            image={'https://images-na.ssl-images-amazon.com/images/I/81U8UDy4ojL.jpg'}
                            title={'Baki'} 
                            edition={'2'} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}