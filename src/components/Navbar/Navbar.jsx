import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { usePizzaContext } from "../../context/PizzaContext";

const Navbar = () => {
  const { carrito } = usePizzaContext();

  const setActiveClass = ({ isActive }) =>
    isActive ? "cart-link active" : "cart-link";

  return (
    <nav>
      <div className="brand">
        <NavLink to="/" className="nav-link">
          <h2>🍕 H o m e</h2>
        </NavLink>
      </div>
      <div className="right-side">
        <NavLink to="/carrito" className={setActiveClass({ isActive: carrito.items.length > 0 })}>
          {carrito.items.length ? (
            <HiShoppingCart color="white" size="2em" aria-hidden="true" />
          ) : (
            <HiOutlineShoppingCart color="white" size="2em" aria-hidden="true" />
          )}
          <span className="visually-hidden">Ir al carrito</span>
        </NavLink>
        <div className="badge">
          <p aria-label={`Llevas ${carrito.cantidadPizzas} pizzas en tu carrito`}>
            {carrito.cantidadPizzas}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;