import React from 'react';
import { mount } from 'enzyme';
import { Home, mapStateToProps } from '../../../pages/Home'

jest.mock('../../../components/NavBar', () => 'nav-bar')
jest.mock('../../../components/ProductList', () => 'product-list')
jest.mock('../../../components/LeftPane', () => 'left-pane')

describe('Home', () => {
    const props = {
        products: 'products',
        loadProducts: jest.fn(),
        selectProduct: jest.fn()
    };

    const initialState = {
        products: 'products',
        selectedProduct: 'selectedProduct'
    };

    it('Should render items without error', () => {
        const wrapper = mount(<Home {...props} />);
        expect(wrapper.find('nav-bar').length).toEqual(1);
        expect(wrapper.find('product-list').length).toEqual(1);
        expect(wrapper.find('left-pane').length).toEqual(1);
        expect(mapStateToProps(initialState).products).toEqual('products');
        expect(mapStateToProps(initialState).selectedProduct).toEqual('selectedProduct');
        expect(wrapper).toMatchSnapshot();
    })
});
