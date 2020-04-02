import { loadProducts } from '../../../src/reducers/product/loadProducts';
import { IMPORT_PRODUCTS } from '../../../src/constant'

test('loadProducts', () => {
    expect(loadProducts('item').payload).toBe('item');
    expect(loadProducts('item').type).toBe(IMPORT_PRODUCTS);
});