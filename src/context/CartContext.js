import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

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
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, pizza) => sum + (pizza.price * pizza.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, total, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};