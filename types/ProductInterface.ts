interface ProductInterface {
  _id: string;
  userId: string;
  name: string;
  image: string[];
  description: string;
  price: number;
  offerPrice: number;
  category: string;
  date: number;
  __v: number;
}

export default ProductInterface;
