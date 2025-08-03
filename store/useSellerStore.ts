import { create } from 'zustand';

type ProductStoreType = {
  isSeller: boolean;
};

const useSellerStore = create<ProductStoreType>(() => ({
  isSeller: true,
}));

export default useSellerStore;
