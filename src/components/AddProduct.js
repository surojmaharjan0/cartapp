import React, { useState, useContext } from 'react';
import { ProductContext } from '../contexts/product/ProductState';

export const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Math.floor(Math.random() * 100000000),
      name,
      price,
    };
    setName('');
    setPrice('');
    addProduct(newProduct);
  };
  return (
    <form className='container col-md-6 mt-5 pb-1' onSubmit={addItem}>
      <div className='row justify-content-center'>
        <div className='col-md-5 my-2'>
          <input
            type='text'
            placeholder='Add an item name'
            className='form-control'
            name='name'
            value={name}
            onChange={updateName}
            required
          />
        </div>
        <div className='col-md-5 my-2'>
          <input
            type='number'
            placeholder='Add the item price'
            className='form-control'
            name='price'
            value={price}
            onChange={updatePrice}
            required
          />
        </div>
        <div className='col-md-2 my-2 text-center'>
          <button type='submit' className='btn btn-primary'>
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
