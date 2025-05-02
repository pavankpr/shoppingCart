import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext';

const ProductListing = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-600">{error}</div>;

  return (
    <section id="products" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mx-auto mb-6 p-2 border rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-lg transition flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
            <div className="flex-grow"></div>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 w-32 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 self-end"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductListing;