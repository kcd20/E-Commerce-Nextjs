import AddressInterface from './AddressInterface';
import OrderItemInterface from './OrderItemInterface';

interface OrderInterface {
  _id: string;
  userId: string;
  items: OrderItemInterface[];
  amount: number;
  address: AddressInterface;
  status: string;
  date: number;
  __v: number;
}

export default OrderInterface;
