// Importación de componentes de enrutamiento de react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importación de los componentes de las vistas
import Home from "./views/Home.jsx";
import Detalle from "./views/Detalle.jsx";
import Carrito from "./views/Carrito.jsx";
import NotFound from "./views/NotFound.jsx";

// Importación de los componentes del navbar y el footer
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Importación del contexto de la pizza
import PizzaProvider from "./context/PizzaContext";

// Importación de componentes de react-toastify para notificaciones
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Función principal de la aplicación
function App() {
  return (
    <div className="app">
      {/* Proveedor de contexto para la pizza */}
      <PizzaProvider>
        {/* Configuración del enrutador */}
        <BrowserRouter>
          {/* Componente de navegación */}
          <Navbar />

          {/* Definición de las rutas */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizzas/:id" element={<Detalle />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>

          {/* Contenedor para las notificaciones */}
          <ToastContainer />
          {/* Componente del footer */}
          <Footer />
        </BrowserRouter>
      </PizzaProvider>
    </div>
    
  );
}
export default App;