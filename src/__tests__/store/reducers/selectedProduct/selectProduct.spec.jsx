import { selectProduct }  from '../../../../reducers/selectedProduct/selectProduct';
import {SELECT_PRODUCT} from '../../../../constant'


test('selectProduct', () => {
    expect(selectProduct('item').payload).toBe('item');
    expect(selectProduct('item').type).toBe(SELECT_PRODUCT);
});