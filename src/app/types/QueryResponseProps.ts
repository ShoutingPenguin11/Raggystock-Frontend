import Product from './Product';

export default interface QueryResponse {
  sessionId: number;
  featuredProduct: Product;
  message: string;
  products: Product[];
}
