import "../ItemListContainer/style.css";
import img from "../../images/Producto 1.jpg";
import ItemCounter from "../ItemCounter/ItemCounter";

function ItemListContainer() {
  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        <div className="producto">
          <a href="#">
            <div className="producto__img">
              <img src={img} alt="" />
            </div>
          </a>
          <div className="producto__footer">
            <h1>Title</h1>
            <p>categoria</p>
            <p className="price">$3.200</p>
          </div>
          <ItemCounter/>
          <div className="buttom">
            <button className="btn">Añadir al Carrito</button>
            <a href="#" className="btn">
            Ver información
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
