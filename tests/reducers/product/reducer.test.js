import  products  from '../../../src/reducers/product/reducer';
import {IMPORT_PRODUCTS} from '../../../src/constant'

describe('IMPORT_PRODUCTS', () => {
    test('with items', () => {
        const params = {
            type: IMPORT_PRODUCTS,
            payload: {
                categories: 'items'
            }
        }
        expect(products([], params)).toBe('items');
    });
    test('without items', () => {
        const params = {
            type: IMPORT_PRODUCTS,
            payload: {
                 items: 'items'
            }
        }
        expect(products([], params)).toEqual([]);
    });
});
