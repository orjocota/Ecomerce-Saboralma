import { useState } from "react";

const ItemCounter = ({stock}) => {

  const [Contador, setContador] = useState(1);
  const [itemStock, setItemStock] = useState(stock);

  const incrementar = () => {
    if(Contador < itemStock){
      setContador(Contador + 1);
    }

  }
  const decrementar = () => {
    if(Contador > 1){
      setContador(Contador - 1);
    }

  }
  const onAdd = () => {
    if (Contador <= itemStock) {
      setItemStock(itemStock - Contador);
      setContador(1);
      console.log("Agregaste " + Contador + "Prodcutos al Carro");      
    }else{
      alert("No se tiene mas Stock Disponible")
    }
  }

  return (
    <>
       <div className="container">
        <div className="row">
          <div className="col">
            <div className="btn-group" role="group">
        <button type="button" className="btn btn-light rounded-start-pill" onClick={decrementar}>
          -
        </button>
        <button type="button" className="btn btn-light">
          {Contador}
        </button>
        <button type="button" className="btn btn-light rounded-end-circle" onClick={incrementar}>
          +
        </button>
      </div>
          </div>
        </div>
        <div className="row my-3">
        <button type="button" className="btn btn-success" onClick={onAdd}>
          Añadir al Carrito
        </button>
        </div>
       </div>



      
    </>
  );
};

export default ItemCounter;
