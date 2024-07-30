import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/itemDetailContainer/ItemDetailContainer";
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
          <Route path={"/ItemDetailContainer"} element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
