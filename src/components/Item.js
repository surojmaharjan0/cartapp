import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/cart/CartState';

export const Item = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const [qty, setQty] = useState('');

  const updateQty = (e) => {
    setQty(e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    let id = '';
    const children = e.target.childNodes;
    children.forEach((child) => {
      if (child.id) {
        id = child.id;
      }
    });
    setQty('');
    addToCart(id, qty);
  };
  return (
    <div className='col-md-3 card m-2 p-3'>
      <form action='#' className=' mt-3' onSubmit={addItem}>
        <h5>{product.name}</h5>
        <span>${product.price}</span>
        <input type='hidden' id={product.id} />
        <input
          type='number'
          className='form-control'
          min='1'
          value={qty}
          onChange={updateQty}
          placeholder='Quantity'
          required
        />
        <button type='submit' className='btn btn-outline-primary mt-2'>
          Add
        </button>
      </form>
    </div>
  );
};
