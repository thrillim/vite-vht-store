import type { Product } from '../../types/Product';
import Link from '../ui/Link';
import { ShoppingCartIcon } from 'lucide-react';
import RadioButtons from '../ui/RadioButtons';
import { useState } from 'react';
import Button from '../ui/Button';
import { Toaster, toast } from 'sonner';
import { useCartStore } from '../../store/useCartStore';

export default function PromotedProductCard({ product }: { product: Product }) {
  const colorOptions = Array.from(
    new Set(product.variants?.map((v) => v.color))
  ).filter(Boolean);
  const sizeOptions = Array.from(
    new Set(product.variants?.map((v) => v.size))
  ).filter(Boolean);

  const [selectedColor, setSelectedColor] = useState(colorOptions[0] || '');
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0] || '');
  const addToCart = useCartStore((state) => state.addToCart);

  // Find the selected variant's quantity
  const selectedVariant = product.variants?.find(
    (v) => v.color === selectedColor && v.size === selectedSize
  );
  const selectedQuantity = selectedVariant?.quantity ?? 0;

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
        </div>

        <div className='w-full flex flex-col justify-center md:text-left text-center'>
          <h2 className='tracking-tighter text-2xl sm:text-3xl md:text-4xl font-semibold'>
            {product.title}
          </h2>
          <p className='text-base md:mt-4 my-2'>{product.details}</p>
          <p className='text-base'>Only {selectedQuantity} left in stock!</p>
          <p className='text-4xl font-bold text-gray-900 my-4 text-right'>
            ${product.price}
          </p>

          {/* Extract unique color options from product.variants */}
            <RadioButtons
            title='Color'
            options={colorOptions.map((color) => ({ label: color, value: color }))}
            selectedOption={selectedColor}
            onChange={setSelectedColor}
            className='mb-12'
            />

          {/* Extract unique size options from product.variants */}
            <RadioButtons
            title='Size'
            options={sizeOptions.map((size) => ({ label: size, value: size }))}
            selectedOption={selectedSize}
            onChange={setSelectedSize}
            className='mb-6'
            />

          <div className='flex gap-1 mb-2'>
            <Button
              className={`w-full text-white ${selectedQuantity === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-black'}`}
              onClick={() => {
                if (!selectedVariant) return;
                addToCart(
                  {
                    id: selectedVariant.id,
                    productId: product.id,
                    title: product.title,
                    price: product.price,
                    imageSrc: product.imageSrc,
                    imageAlt: product.imageAlt,
                    color: selectedVariant.color,
                    size: selectedVariant.size,
                    quantity: 1,
                  },
                  1
                );
                toast.info('Product added to cart!');
              }}
              disabled={selectedQuantity === 0}
            >
              Add to Cart
            </Button>
            <Button
              className='w-full'
              onClick={() => toast.success('Product purchased!')}
              disabled={selectedQuantity === 0}
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
    </>
  );
}
