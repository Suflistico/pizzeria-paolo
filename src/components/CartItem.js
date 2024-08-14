import React from 'react';

const CartItem = ({ pizza }) => {
  return (
    <div className="cart-item">
      <img src={pizza.img} alt={pizza.name} />
      <h4>{pizza.name}</h4>
      <p>Precio: ${pizza.price}</p>
    </div>
  );
};

export default CartItem;