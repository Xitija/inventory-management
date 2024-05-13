type Product = {
  productName: string;
  quantity: number;
  price: number;
  category: string;
};

type Sales = {
  productSold: string;
  quantity: number;
  totalAmount: number;
};

export type { Product, Sales };
