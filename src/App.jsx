import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import { NavBar } from "./Componentes/NavBar/NavBar";
import "boxicons"

function App() {
  return (    
    <div className="App">
      <NavBar/>
      <ItemListContainer mensaje="¡Esta Pagina de encuentra en construcion, por favor tener paciencia..." />
    </div>
  );
}
export default App;
