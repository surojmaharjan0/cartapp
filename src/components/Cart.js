import React, { useContext } from 'react';
import { CartContext } from '../contexts/cart/CartState';

export const Cart = () => {
  const { products } = useContext(CartContext);
  let total = products
    .reduce((acc, product) => acc + product.subTotal, 0)
    .toFixed(2);
  return (
    <div>
      <h4 className='text-center text-dark'>Cart</h4>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.qty}</td>
              <td>$ {Number(product.subTotal).toFixed(2)}</td>
            </tr>
          ))}
          <tr className='bg-dark text-white'>
            <td colSpan='2' className='text-center'>
              TOTAL
            </td>
            <td>$ {total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
