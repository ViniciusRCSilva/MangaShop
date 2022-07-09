import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Categories } from "./pages/Categories";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { Presentation } from "./pages/Presentation";
import { Profile } from "./pages/Profile";
import { Register } from "./pages/Register";
import { MangaPage } from "./pages/MangaPage";
import { EditProfile } from "./pages/EditProfile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apresentacao" element={<Presentation />} />
      <Route path="/autenticacao" element={<Auth />} />
      <Route path="/cadastrar" element={<Register />} />
      <Route path="/categorias" element={<Categories />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/manga/:title" element={<MangaPage 
          title={'Teste'}
          price={'0,00'}
          image={'https://miro.medium.com/max/640/0*i1v1In2Tn4Stnwnl.jpg'}
          desc={'Descrição teste blablabla'}
        />} 
      />
      <Route path="/perfil" element={<Profile />} />
      <Route path="/editarPerfil" element={<EditProfile />} />
    </Routes>
  )
}
