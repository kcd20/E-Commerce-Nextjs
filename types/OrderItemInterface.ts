import ProductInterface from './ProductInterface';

interface OrderItemInterface {
  product: ProductInterface;
  quantity: number;
  _id: string;
}

export default OrderItemInterface;
