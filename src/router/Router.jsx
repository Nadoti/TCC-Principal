import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import Login from "../pages/login/Login"
import { NewQuery } from "../pages/newQuery/NewQuery"
import { PainelCliente } from "../pages/panel/PainelClient"
import { Register } from "../pages/register/Register"


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register/*" element={<Register />} />
      <Route path="/login/*" element={<Login />} />
      <Route path="/painel/*" element={<PainelCliente />} />
      <Route path="/novaconsulta/*" element={<NewQuery />} />
    </Routes>
  )
}