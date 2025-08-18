import CartCard from '../components/Cart/CartCard';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { ProductCardInCart } from '../components/Cart/ProductCardInCart';
import { useCart } from '../context/CartContext';


function formatUSD(amount: number) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function CartPage() {
  const navigate = useNavigate();
  const { cart, removeCart } = useCart();
  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  const shipping = 4.99;
  const tax = 0.1 * subtotal;
  const total = subtotal + shipping + tax;
  return (
    <div className='max-w-5xl mx-auto py-6 px-4 md:px-6'>
      <h1 className='font-bold text-3xl lg:text-4xl tracking-tighter'>
        Check out
      </h1>
      <div className='grid md:grid-cols-2 gap-6 lg:gap-12 items-start py-4 md:py-8 lg:py-12'>
        <div className='grid md:grid-cols-1 gap-2'>
          <CartCard title='Shipping' />
          <CartCard title='Billing' />
          <CartCard title='Payment' />
          <CartCard title='Cart Summary'>
            <div>
              {cart.length === 0 ? (
                <div className='py-6'>Your cart is empty</div>
              ) : (
                cart.map((item, index) => (
                  <ProductCardInCart
                    key={index}
                    product={item}
                  />
                ))
              )}
            </div>
            <div className='text-xl font-semibold'>
              Total: {formatUSD(subtotal)}
            </div>
          </CartCard>
        </div>
        <CartCard title='Order Summary'>
          <div className='space-y-2 py-6'>
            <div className='flex justify-between'>
              <span>Subtotal</span>
              <span>{formatUSD(subtotal)}</span>
            </div>
            <div className='flex justify-between'>
              <span>Shipping</span>
              <span>{formatUSD(shipping)}</span>
            </div>
            <div className='flex justify-between'>
              <span>Tax</span>
              <span>{formatUSD(tax)}</span>
            </div>
          </div>

          <div className='text-xl font-semibold'>Total: {formatUSD(total)}</div>

          {cart.length > 0 && (
            <Button
              className='w-full bg-black text-white hover:bg-black/80 mt-6'
              onClick={() => {
                removeCart();
                navigate('/success');
              }}
            >
              Place Order
            </Button>
          )}
        </CartCard>
      </div>
    </div>
  );
}

export default CartPage;
