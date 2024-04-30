import React from "react";
import { usePizzaContext } from "../context/PizzaContext"; // Importa el contexto del carrito
import { TiPlus, TiMinus } from "react-icons/ti"; // Importa iconos para los botones de aumentar y disminuir

const Carrito = () => {
  const { carrito, añadirAlCarrito, removerDelCarrito, formatearPrecio } =
    usePizzaContext() || {}; // Obtiene el estado del carrito y las funciones necesarias del contexto

  return (
    <main>
      <section className="cart card card-body">
        <h1 className="ch">Mi carrito</h1>
        {!carrito || !carrito.items.length ? ( // Si el carrito está vacío, muestra un mensaje
          <p>Aun no realizas ninguna compra</p>
        ) : (
          <>
            <ul className="cart-list">
              {carrito.items.map((item) => ( // Mapea cada elemento del carrito
                <li key={item.id}>
                  <div className="cart-item">
                    <img src={item.img} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <p>{formatearPrecio(item.precio * item.cantidad)}</p> 
                    </div>
                  </div>

                  <div className="cart-item-buttons">
                    <button
                      onClick={() => removerDelCarrito(item)} 
                      aria-label="Remover del carrito"
                    >
                      <TiMinus aria-hidden="true" />
                    </button>
                    <p className="cantidad">{item.cantidad}</p> {/* Muestra la cantidad del producto */}
                    <button
                      onClick={() => añadirAlCarrito(item)} // Al hacer clic, añade un producto al carrito
                      aria-label="Agregar al carrito"
                    >
                      <TiPlus aria-hidden="true" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <h2>Total: {formatearPrecio(carrito.total)}</h2> {/* Muestra el total de la compra */}
              <button className="btn">Ir a pagar</button> {/* Botón para ir a pagar */}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Carrito;