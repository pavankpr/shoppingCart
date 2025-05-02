import { CartProvider } from './CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductListing from './components/ProductListing';
import CartPage from './components/CartPage';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <div className="pt-20">
        <Header />
        <main>
          <section id="home">
            <Hero />
          </section>
          <ProductListing />
          <CartPage />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;