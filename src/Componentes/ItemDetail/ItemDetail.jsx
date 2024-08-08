import ItemCounter from "../ItemCounter/ItemCounter";
import "../ItemListContainer/style.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ props }) => {
  return (
    <div className="container mx-auto pt-5">
      <h1 className="title"> PRODUCTOS </h1>
      <div className="row text-center justify-content-center">
        <div className="col-md-4">
          <img src={props.image} alt={props.title} className="img-fluid" />
        </div>
        <div className="col-md-4">
          <h2>
            <strong>{props.title}</strong>
          </h2>
          <p>{props.description}</p>
          <p>
            Precio: <strong>${props.price}</strong>
          </p>
          <ItemCounter stock={props.stock} />
          <Link to={"/ItemListContainer"}>
            <button type="button" className="btn btn-dark my-1 w-75">
              Regresar a los Productos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
