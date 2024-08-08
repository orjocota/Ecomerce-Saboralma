import { useState, useEffect } from "react";
import Productos from "../../Json/Json.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [objeto, setObjeto] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
      const promesa = new Promise(resolve => {
        setTimeout(() => {
          resolve(Productos.find(element => element.id == id))          
        }, 2000)
      })
      promesa.then(result => {
        setObjeto(result)        
      })  
    }, [id])     
    return (  
      <ItemDetail props={objeto}/>
    );
}
export default ItemDetailContainer