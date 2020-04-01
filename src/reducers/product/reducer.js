import {
  IMPORT_PRODUCTS,
} from '../../constant'

export const INITIAL_STATE = [];

const extractProducts = (products) => {
  return products.categories || [];
}

const products = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case IMPORT_PRODUCTS: {
      return extractProducts(payload);
    }
    default: return state;
  }
}

export default products
