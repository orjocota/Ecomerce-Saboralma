import { BrowserRouter, Routes, Route, useActionData } from "react-router-dom";
import { NavBar } from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import Inicio from "./Componentes/Inicio/Inicio";
import "boxicons";
import { useState } from "react";

function App() {
const [Tproductos, setTproductos]= useState([]);
const [Total, setTotal]= useState(0);
const [Contador, setContador]= useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar 
          Total={Total}
          setTotal={setTotal}
          Contador={Contador}
          setContador={setContador}
          Tproductos={Tproductos}
          setTproductos={setTproductos}
        />
        <Routes>
          <Route path={"/Inicio"} element={<Inicio />} />
          <Route path={"/ItemListContainer"} element={<ItemListContainer 
            Tproductos={Tproductos}
            setTproductos={setTproductos}
            Total={Total}
            setTotal={setTotal}
            Contador={Contador}
            setContador={setContador}
          />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
