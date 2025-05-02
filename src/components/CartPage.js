import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

const CartPage = () => {
  const { cart, updateQuantity, removeItem } = useContext(CartContext);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <section id="cart" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-4" />
                <div className="flex-1">
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-4 text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <p className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </p>
            <button
              disabled
              className="mt-4 w-full bg-gray-400 text-white py-2 rounded opacity-50"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;