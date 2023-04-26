export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface ColorOptions {
  color: string;
  category: string;
  type?: string;
  code: Code;
}

export interface Code {
  rgba: number[];
  hex: string;
}
