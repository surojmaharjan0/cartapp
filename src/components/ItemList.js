import React, { useContext } from 'react';
import { Item } from './Item';
import { ProductContext } from '../contexts/product/ProductState';

export const ItemList = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className='row justify-content-around'>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};
