export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
};

export type Data = Product[];

export type PropsSVG = {
  width?: string;
  height?: string;
  fill?: string;
};
