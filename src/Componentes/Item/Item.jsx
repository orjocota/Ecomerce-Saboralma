import ItemCounter from "../ItemCounter/ItemCounter";


const Item = ({ item }) => {
  return (
    <>
      <div className="col-md-4 mb-3">
        <div className="card h-100">
          <img src={item.image} className="card-img-top object-fit-cover" alt={item.title}/>
          <div className="card-body text-center">
            <h5 className="card-title text-uppercase fs-4 fw-bold">{item.title}</h5>
            <p className="card-text fs-4">${item.price}</p>
            <ItemCounter stock={10} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
