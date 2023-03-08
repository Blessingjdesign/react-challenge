import React from 'react';
import { Product } from './types';

interface Props {
  products: Product[];
  onRemove: (id: string) => void;
}

function ProductList({ products, onRemove }: Props) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <p>{product.id}</p>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <button onClick={() => onRemove(String(product.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
