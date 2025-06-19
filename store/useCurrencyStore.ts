import { create } from 'zustand';

type CurrencyType = {
  currency: string;
};
const useCurrencyStore = create<CurrencyType>(() => ({
  currency: process.env.NEXT_PUBLIC_CURRENCY ?? 'JPY',
}));

export default useCurrencyStore;
