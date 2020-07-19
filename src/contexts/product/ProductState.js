import React, { createContext, useReducer } from 'react';
import ProductReducer from './productReducer';

// Product State
const initialState = {
  products: [
    { id: '001', name: 'Black Watch', price: 10 },
    { id: '002', name: 'Blue dress', price: 20 },
    { id: '003', name: 'Tshirt', price: 8 },
  ],
};

// Make context
export const ProductContext = createContext(initialState);

// Create Provider
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  //actions here
  const addProduct = (product) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: product,
    });
  };
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
