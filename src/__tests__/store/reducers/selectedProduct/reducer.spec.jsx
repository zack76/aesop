import  selectedProduct  from '../../../../reducers/selectedProduct/reducer';
import {REMOVE_SELECT_PRODUCT, SELECT_PRODUCT} from '../../../../constant'

describe('selectedProduct', () => {
    test('SELECT_PRODUCT', () => {
        const params = {
            type: SELECT_PRODUCT,
            payload: 'item'
        }
        expect(selectedProduct(undefined, params)).toBe('item');
    });

    test('SELECT_PRODUCT', () => {
        const params = {
            type: REMOVE_SELECT_PRODUCT,
            payload: 'item'
        }
        expect(selectedProduct(undefined, params)).toBeNull();
    });

    test('without default type', () => {
        const params = {
            type: 'default',
            payload: 'item'
        }
        expect(selectedProduct(undefined, params)).toBeNull();
    });
});
