import type { Product } from '../../types/Product';
import Button from '../ui/button';

export default function PromotedProductCard({
  product
}: {
  product: Product;
}) {
  return (
    <div className='flex flex-col md:flex-row md:mt-12 items-center justify-between'>
      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="w-[500px] h-[500px] object-cover bg-slate-300 rounded-md mb-4"
      />
      <div className='w-full flex flex-col justify-center px-6 md:text-left text-center'>
        <h2 className='tracking-tighter text-3xl sm:text-4xl md:text-5xl font-semibold'>{product.title}</h2>
        <p className='md:text-xl lg:text-base md:mt-4 my-2 text-base text-gray-500'>{product.summary}</p>
        <Button className='bg-black text-white !px-8 mx-auto md:m-0'>View Product</Button>
      </div>
    </div>
  );
}
