import CartCard from '../components/Cart/CartCard';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

function CartPage() {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(() => {
    return localStorage.getItem('orderPlaced') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('orderPlaced', orderPlaced ? 'true' : 'false');
  }, [orderPlaced]);
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
            <div>Item 1</div>
            <div>Item 2</div>
          </CartCard>
        </div>
        <CartCard title='Order Summary'>
          <div>Item 1</div>
          <div>Item 2</div>
          {!orderPlaced && (
            <Button
              className='w-full bg-black text-white hover:bg-black/80'
              onClick={() => {
                setOrderPlaced(true);
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
