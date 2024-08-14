import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../Cart.css';

function Cart() {
  const { cart, updateQuantity, removeFromCart, total } = useContext(CartContext);
  const navigate = useNavigate();

  const incrementQuantity = (pizza) => {
    updateQuantity(pizza.id, pizza.quantity + 1);
  };

  const decrementQuantity = (pizza) => {
    if (pizza.quantity > 1) {
      updateQuantity(pizza.id, pizza.quantity - 1);
    }
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <h1 className="empty-cart-text">Tu carrito está vacío.</h1>
      ) : (
        <div className="cart-card">
          <h1 className="title">Carrito de Compras</h1>
          <h2 className="subtitle">Mis Pizzas</h2>
          {cart.map((pizza, index) => (
            <div key={index} className="cart-item">              
              <div className="cart-item-details">
                <h3 className="item-title">{pizza.name}</h3>
                <p className="item-price">Precio: ${pizza.price}</p>
                <div className="quantity-controls">
                  <button className="quantity-button" onClick={() => decrementQuantity(pizza)}>-</button>
                  <span className="quantity-text">{pizza.quantity}</span>
                  <button className="quantity-button" onClick={() => incrementQuantity(pizza)}>+</button>
                </div>
                <p className="subtotal-text">Subtotal: ${pizza.price * pizza.quantity}</p>
                <button onClick={() => handleRemove(pizza.id)} className="remove-button">Eliminar</button>
              </div>
              <img src={pizza.img} alt={pizza.name} className="cart-item-img" />
            </div>
          ))}
          <h2 className="total-text">Total: ${total}</h2>
        </div>
      )}
      <button onClick={() => navigate('/')} className="back-button">Volver</button>
    </div>
  );
}

export default Cart;