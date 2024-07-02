import LOGO from "../../assets/LOGO.png";
import CartWidget from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <header>
      <a href="#">
        <div className="logo">
          <img src={LOGO} alt="Logo" />
          <h1>Saboralma</h1>
        </div>
      </a>
      <ul>
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="#">PRODUCTOS</a>
        </li>
      </ul>
      <CartWidget />
    </header>
  );
};
