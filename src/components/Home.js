import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import pizzasData from '../data/pizzas.json';
import { CartContext } from '../context/CartContext';
import '../App.css'; 

const Home = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="app-background">
      <div style={styles.pizzaList}>
        {pizzasData.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <h2>{pizza.name}</h2>
            <img src={pizza.img} alt={pizza.name} />
            <p>Precio: ${pizza.price}</p>
            <button onClick={() => addToCart(pizza)} className="cart-button">Agregar al carrito</button>
            <Link to={`/pizza/${pizza.id}`} className="details-link">Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  pizzaList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

export default Home;