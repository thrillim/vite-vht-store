import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import PromotedProductCard from './components/Product/PromotedProductCard';
import { products } from './mocks/products';
import { Routes, Route, Link } from 'react-router-dom';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <>
      <Header />
      <div className='max-w-5xl px-4 sm:mx-auto'>
        <Routes>
          <Route
            path='/'
            element={
              <div>
                <Banner />
                <PromotedProductCard product={products[0]} />
                <div style={{ marginTop: 32 }}>
                  <h2>All Products</h2>
                  <ul
                    style={{
                      display: 'flex',
                      gap: 24,
                      flexWrap: 'wrap',
                      padding: 0,
                      listStyle: 'none',
                    }}
                  >
                    {products.map((product) => (
                      <li key={product.id}>
                        <Link
                          to={`/product/${product.slug}`}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            style={{ width: 120, borderRadius: 8 }}
                          />
                          <div>{product.title}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            }
          />
          <Route
            path='/product/:slug'
            element={<ProductPage />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
