import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Categories } from "./pages/Categories";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { Presentation } from "./pages/Presentation";
import { Profile } from "./pages/Profile";
import { Register } from "./pages/Register";
import { MangaPage } from "./pages/MangaPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apresentacao" element={<Presentation />} />
      <Route path="/autenticacao" element={<Auth />} />
      <Route path="/cadastrar" element={<Register />} />
      <Route path="/categorias" element={<Categories />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/pagina" element={<MangaPage 
          title={'Berserk'}
          price={'24,99'}
          image={'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2021/12/Berserk-41-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1'}
          desc={'é uma série de mangá escrita e ilustrada por Kentaro Miura. Situado em um mundo de fantasia sombria inspirado na Europa ...'}
        />} 
      />
      <Route path="/perfil" element={<Profile />} />
    </Routes>
  )
}
