
import { create } from 'zustand';
import type { CartItem } from '../types/Cart';

type CartState = {
	cart: CartItem[];
	addToCart: (variant: CartItem, quantity: number) => void;
	removeFromCart: (variantId: string) => void;
	removeCart: () => void;
};

const getInitialCart = (): CartItem[] => {
	const stored = localStorage.getItem('cart');
	return stored ? JSON.parse(stored) : [];
};

export const useCartStore = create<CartState>((set, get) => ({
	cart: getInitialCart(),
	addToCart: (variant: CartItem, quantity: number) => {
		const { cart } = get();
		// Check by variant id
		const exists = cart.find((item) => item.id === variant.id);
		if (exists) {
			exists.quantity += quantity;
			localStorage.setItem('cart', JSON.stringify(cart));
			set({ cart });
			return;
		}
		const newCart = [...cart, { ...variant, quantity }];
		localStorage.setItem('cart', JSON.stringify(newCart));
		set({ cart: newCart });
	},
	removeFromCart: (variantId: string) => {
		const { cart } = get();
		const newCart = cart.filter((item) => item.id !== variantId);
		localStorage.setItem('cart', JSON.stringify(newCart));
		set({ cart: newCart });
	},
	removeCart: () => {
		localStorage.setItem('cart', JSON.stringify([]));
		set({ cart: [] });
	},
}));
