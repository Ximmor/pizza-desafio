import { createContext, useContext, useState } from "react"; // Importa funciones necesarias de React
import pizzasJson from "../data/pizzas.json"; // Importa el archivo JSON que contiene datos de las pizzas
import { toast, cssTransition } from "react-toastify"; // Importa funciones para mostrar notificaciones
import "animate.css"; // Importa la librería animate.css para animaciones

const PizzaContext = createContext(); // Crea un contexto de React llamado PizzaContext

const PizzaProvider = ({ children }) => { // Define el componente PizzaProvider
  const carritoInicial = { // Define el estado inicial del carrito
    total: 0,
    cantidadPizzas: 0,
    items: [],
  };

  const [pizzas, setPizzas] = useState(pizzasJson); // Define el estado de las pizzas y su función setter
  const [carrito, setCarrito] = useState(carritoInicial); // Define el estado del carrito y su función setter

  const actualizarTotales = () => { // Función para actualizar los totales del carrito
    carrito.total = carrito.items.reduce((acc, item) => {
      return acc + item.cantidad * item.precio;
    }, 0);

    carrito.cantidadPizzas = carrito.items.reduce((acc, item) => {
      return acc + item.cantidad;
    }, 0);
  };

  const mostrarToast = (texto) => { // Función para mostrar notificaciones con toast
    const animacion = cssTransition({
      enter: "animate__animated animate__fadeInUp", // Animación de entrada
      exit: "animate__animated animate__fadeOut", // Animación de salida
    });

    toast(texto, { // Muestra la notificación de toast
      position: toast.POSITION.BOTTOM_LEFT, // Posición en la pantalla
      autoClose: 2000, // Cierre automático después de 2000ms
      transition: animacion, // Animación de transición
      hideProgressBar: true, // Oculta la barra de progreso
    });
  };

  const añadirAlCarrito = (pizza) => { // Función para añadir una pizza al carrito
    const pizzaIndex = carrito.items.findIndex((item) => item.id === pizza.id);

    pizzaIndex === -1 // Si la pizza no está en el carrito, la añade; si ya está, aumenta su cantidad
      ? carrito.items.push({
          name: pizza.name,
          img: pizza.img,
          id: pizza.id,
          precio: pizza.price,
          cantidad: 1,
        })
      : carrito.items[pizzaIndex].cantidad++;

    actualizarTotales(); // Actualiza los totales del carrito

    setCarrito({ ...carrito }); // Actualiza el estado del carrito
    mostrarToast( // Muestra una notificación de toast informando que se añadió una pizza al carrito
      `Producto añadido: ${
        pizza.name[0].toUpperCase() + pizza.name.slice(1)
      }`
    );
  };

  const removerDelCarrito = (pizza) => { // Función para remover una pizza del carrito
    const pizzaIndex = carrito.items.findIndex((item) => item.id === pizza.id);

    carrito.items[pizzaIndex].cantidad > 1 // Si hay más de una pizza, reduce su cantidad; si no, la elimina del carrito
      ? carrito.items[pizzaIndex].cantidad--
      : carrito.items.splice(pizzaIndex, 1);

    actualizarTotales(); // Actualiza los totales del carrito

    setCarrito({ ...carrito }); // Actualiza el estado del carrito
    mostrarToast( // Muestra una notificación de toast informando que se eliminó una pizza del carrito
      `Producto Eliminado: ${
        pizza.name[0].toUpperCase() + pizza.name.slice(1)
      }`
    );
  };

  const formatearPrecio = (price) => { // Función para formatear el precio a moneda chilena
    const numberToCLP = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    });

    return numberToCLP.format(price);
  };

  return ( // Retorna el proveedor del contexto con sus valores y provee el contexto a los componentes hijos
    <PizzaContext.Provider
      value={{
        pizzas,
        setPizzas,
        carrito,
        setCarrito,
        formatearPrecio,
        añadirAlCarrito,
        removerDelCarrito,
      }}
    >
      {children} {/* Renderiza los componentes hijos */}
    </PizzaContext.Provider>
  );
};

export const usePizzaContext = () => useContext(PizzaContext); // Hook personalizado para consumir el contexto

export default PizzaProvider; 