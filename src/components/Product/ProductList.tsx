import React from 'react';
import type { Product } from '../../types/Product';
import ProductCard from './ProductCard';
import { twMerge } from 'tailwind-merge';

type ProductListProps = {
  title?: string;
  products: Product[];
  className?: string;
};

const ProductList: React.FC<ProductListProps> = ({ title, products, className }) => (
  <div className={twMerge('mb-40', className)}>
    {title && <h2 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 tracking-tighter'>{title}</h2>}
    <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {products.map(product => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  </div>
);

export default ProductList;