import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate para la navegación

const NotFound = () => { // Define el componente NotFound
  const navigate = useNavigate(); // Obtiene la función navigate para redireccionar

  const irAlHome = () => { // Define la función para redireccionar al home
    navigate("/"); // Navega hacia la ruta "/"
  };

  return (
    <main>
      <section className="not-found card card-body"> {/* Sección de la página de error */}
        <img
          src="ges?q=tbn:ANd9GcQdySSTGRSmUgNZgEUsoqte2jeEdABzKw4ApA&usqp=CAU"
          alt="sad"
          aria-hidden="true"
        /> {/* Imagen ilustrativa de una pizza triste */}
        <div>
          <h3>No hay nada en tu carrito </h3> {/* Mensaje de error */}
          <br />
          <button onClick={irAlHome} className="btn"> {/* Botón para volver al home */}
            Volver al Home
          </button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;