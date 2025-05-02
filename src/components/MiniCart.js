import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const MiniCart = ({ closeCart }) => {
  const { cart } = useContext(CartContext);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 z-20">
      <h3 className="text-lg font-semibold mb-2">Cart</h3>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center mb-2">
              <img src={item.image} alt={item.title} className="w-12 h-12 object-contain mr-2" />
              <div>
                <h4 className="text-sm">{item.title}</h4>
                <p className="text-sm">${item.price} x {item.quantity}</p>
              </div>
            </div>
          ))}
          <p className="font-semibold">Subtotal: ${subtotal.toFixed(2)}</p>
          <div className="mt-4 flex justify-between">
            <a href="#cart" onClick={closeCart} className="bg-blue-600 text-white px-4 py-2 rounded">
              View Cart
            </a>
            <button disabled className="bg-gray-400 text-white px-4 py-2 rounded opacity-50">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MiniCart;