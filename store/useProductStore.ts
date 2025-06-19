import ProductInterface from '@/types/ProductInterface';
import { create } from 'zustand';

type ProductStoreType = {
  products: ProductInterface[];
  updateProducts: (products: ProductInterface[]) => void;
};

const useProductStore = create<ProductStoreType>((set) => ({
  products: [],
  updateProducts: (products: ProductInterface[]) => set({ products }),
}));

export default useProductStore;
