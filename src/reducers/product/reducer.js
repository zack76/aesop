import {
  IMPORT_PRODUCTS,
} from '../../constant'

export const INITIAL_STATE = [];


const products = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case IMPORT_PRODUCTS: {
      return [
        ...state,
        payload
      ];
    }
    default: return state;
  }
}

export default products
