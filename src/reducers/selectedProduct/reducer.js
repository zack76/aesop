import {
  SELECT_PRODUCT,
  REMOVE_SELECT_PRODUCT,
} from '../../constant'

export const INITIAL_STATE = [];


const selectedProduct = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SELECT_PRODUCT: {
      return payload;
    }
    case REMOVE_SELECT_PRODUCT: {
      return null;
    }
    default: return null;
  }
}

export default selectedProduct
