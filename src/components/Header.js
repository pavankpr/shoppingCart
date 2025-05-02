import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import MiniCart from './MiniCart';

const Header = () => {
  const { cart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mellow Shop</h1>
        <nav className="flex space-x-4">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#products" className="hover:text-blue-600">Products</a>
          <a href="#cart" className="hover:text-blue-600">Cart</a>
        </nav>
        <div className="relative">
          <button onClick={() => setIsCartOpen(!isCartOpen)} className="flex items-center">
            <span>Cart ({cart.length})</span>
          </button>
          {isCartOpen && <MiniCart closeCart={() => setIsCartOpen(false)} />}
        </div>
      </div>
    </header>
  );
};

export default Header;