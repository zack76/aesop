import { removeSelectProduct } from '../../../src/reducers/selectedProduct/removeSelectProduct';
import { REMOVE_SELECT_PRODUCT } from '../../../src/constant'

test('removeSelectProduct', () => {
    expect(removeSelectProduct('item').type).toBe(REMOVE_SELECT_PRODUCT);
});