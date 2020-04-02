import { removeSelectProduct }  from '../../../../reducers/selectedProduct/removeSelectProduct';
import {REMOVE_SELECT_PRODUCT} from '../../../../constant'

test('removeSelectProduct', () => {
    expect(removeSelectProduct('item').type).toBe(REMOVE_SELECT_PRODUCT);
});