import { useCartStore } from '../../store/useCartStore';
import type { CartItem } from '../../types/Cart';


interface ProductCardInCartProps {
  product: CartItem;
}

export const ProductCardInCart: React.FC<ProductCardInCartProps> = ({
  product,
}) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  return (
    <div className='flex justify-between items-center p-4 gap-4'>
      <div className='w-full inline-flex gap-4'>
        <div className='my-auto'>
          <img
            src={product.imageSrc}
            alt={product.title}
            className='w-16 h-16 object-cover'
          />
        </div>
        <div className='text-left gap-1 flex flex-col justify-center'>
          <h2 className='font-medium'>Name {product.title}</h2>
          <p className='text-gray-500'>
            {product.color}, {product.size}, Quantity:{' '}
            {product.quantity}
          </p>
          <p className=''>${product.price}</p>
        </div>
      </div>
      <button
        className='self-start text-sm font-medium text-red-600 hover:underline'
        onClick={() => removeFromCart(product.id)}
      >
        Remove
      </button>
    </div>
  );
};
