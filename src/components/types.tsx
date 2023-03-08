export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  
  export type ProductsState = {
    products: Product[];
  };
  
  export type ProductsAction =
    | { type: 'ADD_PRODUCT'; payload: Product }
    | { type: 'REMOVE_PRODUCT'; payload: string }
    | { type: 'RESET_PRODUCTS'; payload: Product[] };
  