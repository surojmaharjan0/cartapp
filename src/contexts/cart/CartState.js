import React, { createContext, useReducer, useContext } from 'react';
import CartReducer from './cartReducer';
import { ProductContext } from '../product/ProductState';

const initialState = {
  products: [],
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const { products } = useContext(ProductContext);

  //actions here
  function addToCart(id, qty) {
    const product = products.filter((product) => String(product.id) === id);
    const subTotal = product[0].price * qty;
    const cartItem = {
      ...product[0],
      qty,
      subTotal,
    };

    let existing = false;
    state.products = state.products.map((product) => {
      if (String(product.id) === id) {
        product.qty = +product.qty + +qty;
        product.subTotal = +product.subTotal + subTotal;
        existing = true;
      }
      return product;
    });
    if (!existing) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: cartItem,
      });
    } else {
      dispatch({
        type: 'RETURN',
      });
    }
  }

  return (
    <CartContext.Provider
      value={{
        products: state.products,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
