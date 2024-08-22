/*import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../Navbar.css';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="title">Bienvenido a......Mamma Pizza</div>
      {totalItems > 0 && ( 
        <div className="cart">
          <Link to="/cart" className="cartLink">
            <FaShoppingCart size={24} />
            <span className="cartCount">{totalItems}</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;*/

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../Navbar.css';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { totalItems, clickCount } = useContext(CartContext); // Obtener las unidades de pizza agregadas

  return (
    <nav className="navbar">
      <div className="title">Bienvenido a......Pizzeria Paolo</div>
      {totalItems > 0 && (
        <div className="cart">
          <Link to="/cart" className="cartLink">
            <FaShoppingCart size={24} />
            <span className="cartCount">{totalItems}</span>
          </Link>
        </div>
      )}
      <div className="clickCounter"> {clickCount}</div> {/* MOstrar Cantidad de Pizza */}
    </nav>
  );
};

export default Navbar;
