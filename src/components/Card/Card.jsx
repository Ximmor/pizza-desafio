import { useNavigate } from "react-router-dom"; // Importa la función useNavigate de react-router-dom para la navegación entre rutas.
import "./Card.css"; // Importa el archivo de estilos CSS para aplicar estilos al componente.
import { usePizzaContext } from "../../context/PizzaContext"; // Importa el hook usePizzaContext del contexto PizzaContext.

const Card = ({ data }) => { // Define un componente funcional llamado Card que recibe un objeto de datos como argumento.
  const { formatearPrecio, añadirAlCarrito } = usePizzaContext(); // Utiliza el hook usePizzaContext para obtener funciones relacionadas con las pizzas.

  const { img, name, price, ingredients, id } = data; // Desestructura el objeto de datos para obtener propiedades específicas.
  const navigate = useNavigate(); // Obtiene la función navigate de useNavigate para la navegación entre rutas.

  const verPizza = () => { // Define una función verPizza que redirige a una página específica de pizza.
    navigate(`/pizzas/${id}`); // Utiliza la función navigate para redirigir a la ruta correspondiente a la pizza.
  };

  return ( // Devuelve la estructura de la tarjeta de pizza como un componente de React.
    <div className="card"> {/* Contenedor principal de la tarjeta */}
      <div className="card-img"> {/* Contenedor de la imagen de la pizza */}
        <img src={img} alt={name} /> {/* Muestra la imagen de la pizza */}
      </div>
      <div className="card-body"> {/* Contenedor del cuerpo de la tarjeta */}
        <h3 className="card-title">{name}</h3> {/* Título de la pizza */}
        <p className="card-description"> {/* Descripción de los ingredientes de la pizza */}
          <b>Ingredientes:</b> {ingredients.join(", ")} {/* Lista de ingredientes separados por coma */}
        </p>
        <h3>{formatearPrecio(price)}</h3> {/* Precio de la pizza */}
      </div>
      <div className="card-footer"> {/* Contenedor del pie de la tarjeta */}
        <button onClick={verPizza}> Ver Más </button> {/* Botón para ver más detalles de la pizza */}
        <button onClick={() => añadirAlCarrito(data)}> Añadir al carrito </button> {/* Botón para añadir la pizza al carrito */}
      </div>
    </div>
  );
};

export default Card; // Exporta el componente Card para que pueda ser utilizado en otros archivos.