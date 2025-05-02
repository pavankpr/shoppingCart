import React from 'react';

const Hero = () => (
  <section className="bg-gray-100 py-20 text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-4">Welcome to Mellow Shop</h2>
      <p className="text-lg mb-6">Discover our exclusive collection of products!</p>
      <a href="#products" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
        Shop Now
      </a>
    </div>
  </section>
);

export default Hero;