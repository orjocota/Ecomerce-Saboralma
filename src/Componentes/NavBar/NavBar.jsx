import LOGO from "../../assets/LOGO.png";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"

export const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={LOGO} alt="Logo" />
          <h1>Saboralma</h1>
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/ItemListContainer">PRODUCTOS</Link>
        </li>
      </ul>
      <CartWidget />
    </header>
  );
};
