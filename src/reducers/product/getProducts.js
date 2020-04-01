import { IMPORT_PRODUCTS } from '../../constant'

export const getProducts = (products) => {
    return {
        type: IMPORT_PRODUCTS,
        payload: products
    }
}