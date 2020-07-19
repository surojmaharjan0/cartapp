import React from 'react';
import './App.css';

import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { AddProduct } from './components/AddProduct';
import { ItemList } from './components/ItemList';
import { ProductProvider } from './contexts/product/ProductState';
import { CartProvider } from './contexts/cart/CartState';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Navbar />
        <AddProduct />
        <div className='row  mt-4 justify-content-around container-fluid'>
          <div className='col-md-7'>
            <ItemList />
          </div>
          <div className='col-md-3'>
            <Cart />
          </div>
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
