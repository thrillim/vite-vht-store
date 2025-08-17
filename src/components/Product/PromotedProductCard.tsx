import type { Product } from '../../types/Product';
import Link from '../ui/Link';

export default function PromotedProductCard({ product }: { product: Product }) {
  return (
    <div className='flex flex-col gap-4 md:flex-row md:mt-8 lg:mt-12 items-center justify-between'>
      <div className='aspect-square'>
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className='object-contain bg-slate-300 rounded-md'
        />
      </div>
      <div className='w-full flex flex-col justify-center px-6 md:text-left text-center'>
        <h2 className='tracking-tighter text-3xl sm:text-4xl md:text-5xl font-semibold'>
          {product.title}
        </h2>
        <p className='md:text-xl lg:text-base md:mt-4 my-2 text-base text-gray-500'>
          {product.summary}
        </p>
        <Link
          className='bg-black text-white !px-8 mx-auto md:m-0'
          to={`/product/${product.slug}`}
        >
          View Product
        </Link>
      </div>
    </div>
  );
}
