import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [clickCount, setClickCount] = useState(0); // Nuevo estado para el contador de clics

  useEffect(() => {
    setTotalItems(cart.reduce((sum, pizza) => sum + pizza.quantity, 0));
  }, [cart]);

  const addToCart = (pizza) => {
    const existingPizza = cart.find(item => item.id === pizza.id);
    if (existingPizza) {
      setCart(cart.map(item => item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...pizza, quantity: 1 }]);
    }
    setClickCount(clickCount + 1); // Incrementa el contador de pizzas por cada vez que se agrega una pizza
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
    const previousQuantity = cart.find(item => item.id === id)?.quantity || 0;
    setClickCount(clickCount + (quantity - previousQuantity)); // Ajusta el contador basado en la diferencia de cantidad
  };

  const removeFromCart = (id) => {
    const removedPizza = cart.find(item => item.id === id);
    if (removedPizza) {
      setClickCount(clickCount - removedPizza.quantity); // Disminuye las unidades de pizza
    }
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, pizza) => sum + (pizza.price * pizza.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, total, totalItems, clickCount }}>
      {children}
    </CartContext.Provider>
  );
};
