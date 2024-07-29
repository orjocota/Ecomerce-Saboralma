import { Data } from "../../Data/Data";
import ItemCounter from "../ItemCounter/ItemCounter";
import "../ItemListContainer/style.css";

const ItemListContainer = ({Tproductos,setTproductos}) => {

    const onAddProductos = () =>{
    console.log("add")
  }

  
  return (

      <div className="container">
        <h1 className="title"> PRODUCTOS </h1>
        <div className="row">
          {Data.map((item) => (
            <div key={item.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <img
                  src={item.imagen}
                  className="card-img-top object-fit-cover"
                  alt={item.nombre}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-uppercase fs-4 fw-bold">{item.nombre}</h5>
                  <p className="card-text fs-4">${item.precio}</p>
                  <ItemCounter />
                  <a href="#" className="btn btn-success my-3 fs-4 fw-bold" onClick={() => onAddProductos()}>
                    Añadir a Carrito
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  );
};

export default ItemListContainer;
