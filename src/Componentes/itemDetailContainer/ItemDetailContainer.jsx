import { useState, useEffect } from "react";
import Productos from "../../Json/Json.json";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [Objeto ,setObjeto] = useState({});
    
    useEffect(() => {
      const promesa = new Promise(resolve => {
        setTimeout(() => {
          resolve(Productos.find(Objeto => Objeto.id === 3))
          
        }, 2000);
      })
      promesa.then(result => {
        setObjeto(result)
      })  
    }, []) 
    
    return (
  
        <div className="container">
          <h1 className="title"> PRODUCTOS </h1>
          <div className="row">  
              <ItemDetail obj={Objeto}/>
          </div>        
        </div>
    );
}

export default ItemDetailContainer;