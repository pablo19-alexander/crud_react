import Listar from "./components/Listar";
import Crear from "./components/Crear";
import Editar from "./components/Editar";

import NavBar from "./components/navBar/Nav";
import { Route, Routes } from "react-router-dom";// rutas
// import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Listar />} />
          <Route path="/crear" element={<Crear />} />
          <Route path="/editar" element={<Editar />} />
        </Routes>
      </div>
    </>
  );
}
