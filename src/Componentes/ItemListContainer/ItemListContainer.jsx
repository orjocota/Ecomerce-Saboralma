import { useState, useEffect } from "react";
import Productos from "../../Json/Json.json";
import "../ItemListContainer/style.css";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

  const [item ,setItem] = useState([]);

  useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {
        resolve(Productos)
      }, 2000);
    })
    promesa.then(result => {
      setItem(result)
    })  
  }, []) 
  
  return (

      <div className="container">
        <h1 className="title"> PRODUCTOS </h1>
        <div className="row">  
            <ItemList items={item}/>
        </div>        
      </div>

  );
};

export default ItemListContainer;
