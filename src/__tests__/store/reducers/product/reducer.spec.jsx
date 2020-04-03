import  products  from '../../../../reducers/product/reducer';
import {IMPORT_PRODUCTS} from '../../../../constant'

describe('IMPORT_PRODUCTS', () => {
    test('with items', () => {
        const params = {
            type: IMPORT_PRODUCTS,
            payload: {
                categories: 'items'
            }
        }
        expect(products(undefined, params)).toBe('items');
    });
    test('without items', () => {
        const params = {
            type: IMPORT_PRODUCTS,
            payload: {
            }
        }
        expect(products(undefined, params)).toEqual([]);
    });
    test('without default type', () => {
        const params = {
            type: 'default',
            payload: {
            }
        }
        expect(products(undefined, params)).toEqual([]);
    });
});
