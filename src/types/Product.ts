export type Product = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  details: string;
  price: number;
  quantity: number;
  imageSrc: string;
  imageAlt: string;
  variants: ProductVariant[];
};


export type ProductVariant = {
  id: string;
  color: string[];
  size: string[];
  quantity: number;
};
