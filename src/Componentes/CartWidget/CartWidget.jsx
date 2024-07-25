import "../CartWidget/style.css";
const CartWidget = () => {
  return (
    <>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="numero__carro">1</span>
      </div>
    </>
  );
};

export default CartWidget;
