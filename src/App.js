/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PizzaDetails from './components/PizzaDetails'; 
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import './App.css'; 
import './PizzaDetails.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="app-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<PizzaDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PizzaDetails from './components/PizzaDetails'; 
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';  // Importa el Footer
import { CartProvider } from './context/CartContext';
import './App.css'; 
import './PizzaDetails.css';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="app-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<PizzaDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer /> {/* Incluye el Footer aquí */}
      </Router>
    </CartProvider>
  );
};

export default App;
