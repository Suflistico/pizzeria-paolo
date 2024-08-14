import React, { useState, useEffect } from 'react';
import PizzaCard from './PizzaCard';
import pizzasData from '../data/pizzas.json';

const PizzaList = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    setPizzas(pizzasData);
  }, []);

  return (
    <div className="pizza-list">
      {pizzas.map(pizza => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default PizzaList;