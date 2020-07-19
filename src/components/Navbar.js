import React, { useContext } from 'react';
import { CartContext } from '../contexts/cart/CartState';

export const Navbar = () => {
  const { products } = useContext(CartContext);
  const total = products
    .reduce((acc, product) => acc + product.subTotal, 0)
    .toFixed(2);
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary '>
      <div className='container'>
        <span className='navbar-brand' href='' style={{ fontSize: '1.4em' }}>
          Cart App
        </span>
        <div
          className='ml-auto badge badge-pill badge-light'
          style={{ fontSize: '1em' }}
        >
          Cart Total :<span className='text-info'> ${total}</span>
        </div>
      </div>
    </nav>
  );
};
