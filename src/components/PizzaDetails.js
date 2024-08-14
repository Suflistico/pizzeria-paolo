import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import pizzasData from '../data/pizzas.json';
import '../PizzaDetails.css';

function PizzaDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pizza = pizzasData.find((p) => p.id === id);

  if (!pizza) {
    return <h2>Pizza no encontrada</h2>;
  }

  return (
    <div className="pizza-details-container">
      <div className="pizza-card-details">
        <h1>{pizza.name}</h1>
        <img src={pizza.img} alt={pizza.name} className="pizza-details-img" />
        <p className="pizza-description">{pizza.desc}</p>
        <p className="pizza-ingredients">Ingredientes: {pizza.ingredients.join(', ')}</p>
        <p className="pizza-price">Precio: ${pizza.price}</p>
        <button onClick={() => navigate('/')} className="back-button">Volver</button>
      </div>
    </div>
  );
}

export default PizzaDetails;