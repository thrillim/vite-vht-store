import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import PromotedProductCard from './components/Product/PromotedProductCard';
import { products } from './mocks/products';
import ProductList from './components/Product/ProductList';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import OrderSuccess from './pages/OrderSuccess';
import { CartProvider } from './context/CartContext';

function App() {
  const popularProducts = products.slice(1, 4);
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <div className='max-w-5xl px-4 md:px-6 sm:mx-auto'>
              <Banner />
              <PromotedProductCard product={products[0]} />
              <ProductList
                title='Popular Products'
                products={popularProducts}
                className='py-36'
              />
            </div>
          }
        />
        <Route
          path='/product/:slug'
          element={<ProductPage />}
        />
        <Route
          path='/cart'
          element={<CartPage />}
        />
        <Route
          path='/success'
          element={<OrderSuccess />}
        />
      </Routes>
    </CartProvider>
  );
}

export default App;
