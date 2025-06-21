import { create } from 'zustand';
import useProductStore from './useProductStore';

type CartType = {
  cart: { [productId: string]: number };
  addToCart: (itemId: string) => void;
  updateCart: (itemId: string, quantity: number) => void;
  cartCount: () => number;
  cartAmount: () => number;
};
const useCartStore = create<CartType>((set, get) => ({
  cart: {},
  addToCart: (itemId: string) =>
    set((state) => {
      const cartData = structuredClone(state.cart);
      if (cartData[itemId]) {
        cartData[itemId] += 1;
      } else {
        cartData[itemId] = 1;
      }
      return { cart: cartData };
    }),
  updateCart: (itemId: string, quantity: number) =>
    set((state) => {
      const cartData = structuredClone(state.cart);
      if (quantity === 0) {
        delete cartData[itemId];
      } else {
        cartData[itemId] = quantity;
      }
      return { cart: cartData };
    }),
  cartCount: () => {
    const { cart } = get();
    let totalCount = 0;
    for (const itemId in cart) {
      if (cart[itemId] > 0) {
        totalCount += cart[itemId];
      }
    }
    return totalCount;
  },
  cartAmount: () => {
    const { cart } = get();
    const { products } = useProductStore.getState();
    let totalAmount = 0;
    for (const items in cart) {
      const itemInfo = products.find((product) => product._id === items);
      if (!itemInfo) {
        return totalAmount;
      }
      if (cart[items] > 0) {
        totalAmount += itemInfo?.price * cart[items];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  },
}));

export default useCartStore;
