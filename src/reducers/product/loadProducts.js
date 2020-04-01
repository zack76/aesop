import { IMPORT_PRODUCTS } from '../../constant'

export const loadProducts = (products) => {
    return {
        type: IMPORT_PRODUCTS,
        payload: products
    }
}