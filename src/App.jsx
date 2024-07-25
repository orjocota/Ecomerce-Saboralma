import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Componentes/NavBar/NavBar";
import "boxicons";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/ItemListContainer"} element={<ItemListContainer/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}
export default App;
