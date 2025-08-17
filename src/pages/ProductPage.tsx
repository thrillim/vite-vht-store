import { useParams } from 'react-router-dom';
import { products } from '../mocks/products';
import type { Product } from '../types/Product';
import ProductDetail from '../components/Product/ProductDetail';
import ProductList from '../components/Product/ProductList';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product: Product | undefined = products.find(p => p.slug === slug);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className='max-w-5xl mx-auto px-4 py-6 md:px-6'>
      <ProductDetail product={product} />
      <ProductList title='Related Products' products={products.filter(p => p.id !== product.id)} />
    </div>
  );
}
