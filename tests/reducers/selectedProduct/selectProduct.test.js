import { selectProduct } from '../../../src/reducers/selectedProduct/selectProduct';
import { SELECT_PRODUCT } from '../../../src/constant'

test('selectProduct', () => {
    expect(selectProduct('item').payload).toBe('item');
    expect(selectProduct('item').type).toBe(SELECT_PRODUCT);
});