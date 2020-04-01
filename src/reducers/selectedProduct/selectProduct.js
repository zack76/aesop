import { SELECT_PRODUCT } from '../../constant'

export const selectProduct = (selectedProduct) => {
    return {
        type: SELECT_PRODUCT,
        payload: selectedProduct
    }
}