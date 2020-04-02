import { loadProducts }  from '../../../../reducers/product/loadProducts';
import {IMPORT_PRODUCTS} from '../../../../constant'

test('loadProducts', () => {
    expect(loadProducts('item').payload).toBe('item');
    expect(loadProducts('item').type).toBe(IMPORT_PRODUCTS);
});
