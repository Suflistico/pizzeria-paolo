import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const PizzaCard = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="pizza-card">
      <Link to={`/pizza/${pizza.id}`}>
        <img src={pizza.img} alt={pizza.name} />
        <h3>{pizza.name}</h3>
      </Link>
      <p>Precio: ${pizza.price}</p>
      <button onClick={() => addToCart(pizza)}>Agregar al carrito</button>
    </div>
  );
};

export default PizzaCard;