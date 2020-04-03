import React from 'react';
import { mount } from 'enzyme';
import { LeftPane, mapStateToProps } from '../../../components/LeftPane';
import FontAwesome from 'react-fontawesome';

jest.mock('react-sliding-side-panel', () => 'sliding-panel')
jest.mock('../../../components/LeftPaneContent', () => 'left-pane-content')

describe('LeftPane', () => {
    const props = {
        removeSelectProduct: jest.fn(),
        selectedProduct: 'selectedProduct'
    };

    const initialState = {
        products: 'products',
        selectedProduct: 'selectedProduct'
    };

    it('Should render without error', () => {
        const wrapper = mount(<LeftPane {...props} />);
        expect(wrapper.find(FontAwesome).length).toEqual(1);
        expect(wrapper.find('sliding-panel').length).toEqual(1);
        expect(wrapper.find('left-pane-content').length).toEqual(1);
        expect(mapStateToProps(initialState).products).toEqual('products');
        expect(mapStateToProps(initialState).selectedProduct).toEqual('selectedProduct');
        expect(props.removeSelectProduct.mock.calls.length).toBe(0);
        wrapper
            .find('.btn')
            .first()
            .simulate('click');
        expect(props.removeSelectProduct.mock.calls.length).toBe(1);

    })
    //
});
