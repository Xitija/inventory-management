type Product = {
  _id?: string;
  productName: string;
  quantity: number;
  price: number;
  category: string;
};

type Sales = {
  _id?: string;
  productSold: string;
  quantity: number;
  totalAmount: number;
};

export type { Product, Sales };
