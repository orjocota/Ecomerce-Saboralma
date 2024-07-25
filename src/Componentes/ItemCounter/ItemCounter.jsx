import { useState } from "react";

const ItemCounter = ({stock}) => {
  const [contador, setContador] = useState(1);
  const [itemStock, setItemStock] = useState(stock);

  const incrementar = () => {
    if (contador < itemStock) {
      setContador(contador + 1);
    } else {
      alert("No hay stock suficiente");
    }
  };
  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("No puedes decrementar más");
    }
  };

  
  return (
    <>
      <div>
        <button type="buttom" className="btn_count" onClick={decrementar}>
          -
        </button>
        <button type="buttom" className="btn_count">
          {contador}
        </button>
        <button type="buttom" className="btn_count" onClick={incrementar}>
          +
        </button>
      </div>
    </>
  );
};

export default ItemCounter;
