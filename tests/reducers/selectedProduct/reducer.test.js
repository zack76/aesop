import  selectedProduct  from '../../../src/reducers/selectedProduct/reducer';
import {REMOVE_SELECT_PRODUCT, SELECT_PRODUCT} from '../../../src/constant'

describe('selectedProduct', () => {
    test('SELECT_PRODUCT', () => {
        const params = {
            type: SELECT_PRODUCT,
            payload: 'item'
        }
        expect(selectedProduct([], params)).toBe('item');
    });

    test('SELECT_PRODUCT', () => {
        const params = {
            type: REMOVE_SELECT_PRODUCT,
        }
        expect(selectedProduct([], params)).toBeNull();
    });
});
