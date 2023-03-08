import React, { useState } from 'react';

interface Props {
  onAdd: (name: string, price: number) => void;
  onClose: () => void;
}

function AddProductModal({ onAdd, onClose }: Props) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onAdd(name, parseFloat(price));
    setName('');
    setPrice('');
  }

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <div className='button-wrap'>
        <button className= "s-button" type="submit">Add</button>
        <button className= "x-button" type="button" onClick={onClose}>
          Cancel
        </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductModal;
