import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import Inicio from "./Componentes/Inicio/Inicio";
import "boxicons";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/Inicio"} element={<Inicio />} />
          <Route path={"/ItemListContainer"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
        </Routes>        
      </BrowserRouter>
    </div>
  );
}
export default App;
