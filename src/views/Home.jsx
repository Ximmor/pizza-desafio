import PropTypes from "prop-types"; 
import { usePizzaContext } from "../context/PizzaContext"; 
import Card from "../components/Card/Card"; 

const Home = ({ pizzas }) => { 
  if (!pizzas) { 
    return <div>Cargando...</div>;
  }

  return (
    <>
      <header className="header-container">
        <div className="text-container">
          <h1><span>Pizzería Mamma Mía!!</span></h1>
          <h2>¡¡Tenemos las mejores pizzas que podrás encontrar!!</h2>
          <h3 className="special-offer">¡Aprovecha nuestra oferta especial!</h3>
        </div>
      </header>

      <main>
        <div className="menu-grid"> 
          {pizzas.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </main>
    </>
  );
};

Home.propTypes = { 
  pizzas: PropTypes.array, 
};

const HomePage = () => { 
  const { pizzas } = usePizzaContext(); 
  return <Home pizzas={pizzas} />;   
};   

export default HomePage;