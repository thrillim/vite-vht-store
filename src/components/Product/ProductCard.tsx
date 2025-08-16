import Link from '../ui/Link';
import type { Product } from '../../types/Product';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className='border border-gray-200 shadow-lg rounded-md overflow-hidden'>
      <img
        src={product.imageSrc}
        alt={product.title}
        className='w-full bg-slate-300 rounded-t-md object-cover aspect-square'
      />
      <div className='flex flex-col items-center p-4 space-y-4'>
        <span className='text-md font-bold'>{product.title}</span>
        <span className='text-gray-500'>${product.price}</span>
        <Link to={`/product/${product.slug}`} className='bg-black text-white px-4 py-2 rounded-md'>
          View Product
        </Link>
      </div>
    </div>
  );
}
