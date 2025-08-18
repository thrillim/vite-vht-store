
import { createContext, useState, useEffect, useContext } from 'react';
import type { Product } from '../types/Product';

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  removeCart: () => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  removeCart: () => {},
});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Initialize cart state
  // A cart is an array of objects, each representing a product with its details
  // Assume here only can add 1 product per type
  const [cart, setCart] = useState<Product[]>(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  const addToCart = (product: Product) => {
    console.log('Current cart:', [...cart, product]);

    // Check if the product is already in the cart
    if (cart.find((item) => item.id === product.id)) {
      console.log('Product is already in the cart:', product);
      return;
    } else {
      setCart((prevCart) => [...prevCart, product]);
      console.log('Product added to cart:', product);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const removeCart = () => {
    setCart([]);
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext };

