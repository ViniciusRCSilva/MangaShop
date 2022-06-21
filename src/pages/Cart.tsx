import { ShoppingCart } from "phosphor-react";
import { Header } from "../components/Header";
import { MangaWindowCart } from "../components/MangaWindowForCart/MangaWindowCart";

export function Cart(){
    return(
        <div>
            <Header />

            <div className="flex flex-col p-6 w-full h-full">
                <span className="flex flex-row items-center text-xl"><ShoppingCart className="mr-1 text-red-600"/>Itens no Carrinho</span>

                <div className="p-6 flex flex-col border-2 overflow-y-auto scrollbar-thumb-red-600 scrollbar-track-transparent scrollbar-thin">
                    <MangaWindowCart 
                        image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'} 
                        title={'Berserk'}   
                        edition={'1'} 
                    />

                    <MangaWindowCart 
                        image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'} 
                        title={'Berserk'}   
                        edition={'1'} 
                    />
                    <MangaWindowCart 
                        image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'} 
                        title={'Berserk'}   
                        edition={'1'} 
                    />

                    <MangaWindowCart 
                        image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'} 
                        title={'Berserk'}   
                        edition={'1'} 
                    />
                    <MangaWindowCart 
                        image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'} 
                        title={'Berserk'}   
                        edition={'1'} 
                    />

                    <MangaWindowCart 
                        image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'} 
                        title={'Berserk'}   
                        edition={'1'} 
                    />

                    <MangaWindowCart 
                        image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'} 
                        title={'Berserk'}   
                        edition={'1'} 
                    />
                </div>
            </div>
        </div>
    )
}