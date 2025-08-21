
import { create } from 'zustand';
import type { Product } from '../types/Product';

type CartState = {
	cart: Product[];
	addToCart: (product: Product) => void;
	removeFromCart: (productId: string) => void;
	removeCart: () => void;
};

const getInitialCart = (): Product[] => {
	const stored = localStorage.getItem('cart');
	return stored ? JSON.parse(stored) : [];
};

export const useCartStore = create<CartState>((set, get) => ({
	cart: getInitialCart(),
	addToCart: (product: Product) => {
		const { cart } = get();
		if (cart.find((item) => item.id === product.id)) {
			// Product already in cart
			return;
		}
		const newCart = [...cart, product];
		localStorage.setItem('cart', JSON.stringify(newCart));
		set({ cart: newCart });
	},
	removeFromCart: (productId: string) => {
		const { cart } = get();
		const newCart = cart.filter((item) => item.id !== productId);
		localStorage.setItem('cart', JSON.stringify(newCart));
		set({ cart: newCart });
	},
	removeCart: () => {
		localStorage.setItem('cart', JSON.stringify([]));
		set({ cart: [] });
	},
}));
