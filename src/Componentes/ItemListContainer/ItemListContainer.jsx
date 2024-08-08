import { useState, useEffect } from "react";
import Productos from "../../Json/Json.json";
import "../ItemListContainer/style.css";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [item ,setItem] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {
        resolve(id ? Productos.filter(item => item.category == id) : Productos)
      }, 2000)
    })
    promesa.then(result => {
      setItem(result)
    })  
  },[id]) 
  
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
