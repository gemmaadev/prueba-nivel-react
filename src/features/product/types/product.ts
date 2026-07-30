export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  category: string;
}
