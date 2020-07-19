export default (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'RETURN':
      return {
        ...state,
      };
    default:
      return state;
  }
};
