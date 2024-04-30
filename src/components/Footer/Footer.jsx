import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa"; // Importa los iconos de redes sociales de la librería react-icons/fa.
import "./Footer.css"; // Importa los estilos CSS para el componente Footer.
import PropTypes from 'prop-types'; // Importa PropTypes de la librería prop-types para la validación de props.

const Footer = () => {
  return (
    <footer> {/* Define el elemento footer */}
      <div className="rrss-links"> 
        <a href="https://www.instagram.com/underpizzachile?igsh=MTB5ZGFhbzN3dXNlYg==" target="_blank" rel="under pizza">
          <FaInstagram aria-hidden="true" focusable="false" alt="" />
          <span className="visually-hidden">Visítanos en Instagram</span> 
        </a>
        <a href="https://www.facebook.com/UnderPizzaChile?mibextid=ZbWKwL" target="_blank" rel="under pizza">
          <FaFacebookF aria-hidden="true" focusable="false" alt="" /> 
          <span className="visually-hidden">Visítanos en Facebook</span> 
        </a>
        <a href="https://www.twitter.com/your_twitter_ximmor" target="_blank" rel="ximena morales">
          <FaTwitter aria-hidden="true" focusable="false" alt="" /> 
          <span className="visually-hidden">Visítanos en X</span> 
        </a>
      </div>
      <p>Síguenos en nuestras RRSS</p> 
    </footer>
  );
};

Footer.propTypes = {}; 

export default Footer; 