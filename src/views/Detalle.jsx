import { Link, useParams } from "react-router-dom";
import { GiFullPizza } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { usePizzaContext } from "../context/PizzaContext";

const Detalle = () => {
  const { id } = useParams(); // Obtiene el parámetro de ruta `id` utilizando el hook useParams de react-router-dom
  const { pizzas, formatearPrecio, añadirAlCarrito } = usePizzaContext(); // Obtiene el contexto de la pizza utilizando el hook usePizzaContext

  // Busca la pizza correspondiente al `id` en la lista de pizzas
  const pizza = pizzas.find((item) => item.id === id);

  // Si no se encuentra la pizza, muestra un mensaje de error
  if (!pizza) {
    return <div>Pizza not found!</div>;
  }

  // Extrae los detalles de la pizza
  const { name, desc, img, price, ingredients } = pizza;

  return (
    <main>
      {/* Estructura para mostrar los detalles de la pizza */}
      <section className="card details-layout">
        <div className="details-img">
          <img src={img} alt={name} />
        </div>
        <div className="details-body">
          <h1 className="card-title">{name}</h1>
          <p>{desc}</p>
          <div>
            {/* Lista los ingredientes de la pizza */}
            <h2>Ingredientes:</h2>
            <ul className="ingredient-list">
              {ingredients.map((item, index) => (
                <li key={index} className="list-item">
                  &bull; {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Muestra el precio de la pizza y un botón para agregar al carrito */}
          <div className="details-footer">
            <h3>Precio: {formatearPrecio(price)}</h3>
            <button onClick={() => añadirAlCarrito(pizza)} className="btn">
              <HiOutlineShoppingCart aria-hidden="true" /> Agregar al carrito
            </button>
            {/* Enlace para regresar a la página de inicio */}
            <Link to="/" className="btn" style={{ textDecoration: 'none' }}>
              Regresar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Detalle;