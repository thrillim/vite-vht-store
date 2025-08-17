import type { Product } from '../../types/Product';
import Link from '../ui/Link';
import { ShoppingCartIcon } from 'lucide-react';
import RadioButtons from '../ui/RadioButtons';
import { useState } from 'react';
import Button from '../ui/Button';
import { Toaster, toast } from 'sonner';

export default function PromotedProductCard({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('m');
  return (
    <>
      <Toaster
        richColors
        expand
      />
      <div className='grid md:grid-cols-2 gap-6 lg:gap-12 items-start py-4 md:py-8 lg:py-12 mb-8'>
        <div className='grid md:grid-cols-5 gap-3'>
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className='col-span-4 object-contain aspect-square bg-slate-300 rounded-md mb-4'
          />
          {/* <div className='col-span-1'>
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className='object-contain aspect-square bg-slate-300 rounded-md'
          />
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className='object-contain aspect-square bg-slate-300 rounded-md'
          />
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className='object-contain aspect-square bg-slate-300 rounded-md'
          />
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className='object-contain aspect-square bg-slate-300 rounded-md'
          />
        </div> */}
        </div>

        <div className='w-full flex flex-col justify-center md:text-left text-center'>
          <h2 className='tracking-tighter text-2xl sm:text-3xl md:text-4xl font-semibold'>
            {product.title}
          </h2>
          <p className='text-base md:mt-4 my-2'>{product.details}</p>
          {/* quantity left */}
          <p className='text-base'>Only {product.quantity} left in stock!</p>
          <p className='text-4xl font-bold text-gray-900 my-4 text-right'>
            ${product.price}
          </p>

          <RadioButtons
            title='Color'
            options={[{ label: 'Black', value: 'black' }]}
            selectedOption={selectedColor}
            onChange={setSelectedColor}
            className='mb-12'
          />

          <RadioButtons
            title='Size'
            options={[
              { label: 'XS', value: 'xs' },
              { label: 'S', value: 's' },
              { label: 'M', value: 'm' },
              { label: 'L', value: 'l' },
              { label: 'XL', value: 'xl' },
            ]}
            selectedOption={selectedSize}
            onChange={setSelectedSize}
            className='mb-6'
          />

          <div>
            <div className='flex gap-2 py-2'>
              <Button
                className='w-full bg-black text-white'
                onClick={() => toast.info('Product added to cart!')}
              >
                Add to Cart
              </Button>
              <Button
                className='w-full'
                onClick={() => toast.success('Product purchased!')}
              >
                Buy now!
              </Button>
            </div>

            <Link
              className='bg-white border border-gray-300 w-full text-gray-900 !px-8 mx-auto md:m-0 hover:bg-gray-100'
              icon={<ShoppingCartIcon />}
              iconWidth={20}
              iconHeight={20}
              to={'/cart'}
            >
              View cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
