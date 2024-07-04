import "../ItemListContainer/style.css";

function ItemListContainer({mensaje}) {
  return (
    <>
      <div className="title">
        <h1>Productos</h1>
        <p>{mensaje}</p>
      </div>

    </>
  );
}

export default ItemListContainer;
