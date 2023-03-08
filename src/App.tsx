import React, { useState } from 'react';
import { Product } from './components/types';
import ProductList from './components/ProductList';
import { Header, Footer } from './components/header-footer';
import AddProductModal from './components/AddProductModal';
import './App.css';



function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [query, setQuery] = useState('');
  const [latestId, setLatestId] = useState(0);

  function addProduct(name: string, price: number) {
    const newProduct: Product = {
      id: latestId + 1,
      name,
      price,
      image: '/cart.jpeg',
    };
    setProducts([...products, newProduct]);
    setLatestId(latestId + 1);
    setShowAddProductModal(false);
  }

  function removeProduct(id: string) {
    setProducts(products.filter((product) => product.id.toString() !== id));
  }
  
  function filterProducts(query: string) {
    if (!query) {
      return products;
    }
  
    const numericQuery = parseFloat(query);
    return products.filter((product) => {
      const { id, name, price } = product;
      const lowerCaseQuery = query.toLowerCase();
  
      return (
        id.toString().indexOf(lowerCaseQuery) !== -1 ||
        name.toLowerCase().indexOf(lowerCaseQuery) !== -1 ||
        (typeof numericQuery === "number" && price === numericQuery)
      );
    });
  }
  
  return (
    <>
      <Header />
      <main>
      <div className="main-content">
        <button onClick={() => setShowAddProductModal(true)}>Add Product</button>
        <input className='search-input'
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        </div>
        {showAddProductModal && <AddProductModal onAdd={addProduct} onClose={() => setShowAddProductModal(false)} />}
        <ProductList products={filterProducts(query)} onRemove={removeProduct} />
      </main>
      <Footer />
    </>
  );
}

export default App;
