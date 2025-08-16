import { useParams } from 'react-router-dom';
import { products } from '../mocks/products';
import type { Product } from '../types/Product';

export default function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product: Product | undefined = products.find(p => p.slug === slug);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <></>
  );
}
