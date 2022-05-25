import { Route, Routes } from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Categories } from "./pages/Categories";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { Presentation } from "./pages/Presentation";
import { Profile } from "./pages/Profile";
import { Register } from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apresentacao" element={<Presentation />} />
      <Route path="/autenticacao" element={<Auth />} />
      <Route path="/cadastrar" element={<Register />} />
      <Route path="/categorias" element={<Categories />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/perfil" element={<Profile />} />
    </Routes>
  )
}
