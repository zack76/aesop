import React from 'react';
import { mount, shallow } from 'enzyme';
import { Item, mapStateToProps } from '../../../components/Item';
import { Row } from "react-bootstrap";
import { Config } from '../../../config';


describe('Item', () => {
    const props = {
        selectProduct: jest.fn(),
        items: [
            { name: 'toy', thumbnail: 'fake_src_1', imageUrl: 'imageUrl', shortDescription: 'desc', variants: [{'name': 'a', 'B': 'b'}] },
            { name: 'paper', thumbnail: null, imageUrl: 'imageUrl', shortDescription: 'desc', variants: [{'name': 'a', 'B': 'b'}] },
            { name: 'food', thumbnail: 'fake_src_3', imageUrl: 'imageUrl', shortDescription: 'desc', variants: [{'name': 'a', 'B': 'b'}] }
        ]
    };

    const porpsWithNoItems = {
        items: []
    }

    const initialState = {
        selectedProduct: 1
    };

    it('Should render items without error', () => {
        const wrapper = mount(<Item {...props} />);
        expect(wrapper.find(Row).length).toEqual(Math.ceil(props.items.length / 4));
        expect(wrapper.find('.card-item').length).toBe(3);
        expect(wrapper.find('img').length).toBe(3);
        expect(wrapper.find('img').first().prop('src')).toBe(Config.AESOP_URL + 'fake_src_1');
        expect(wrapper.find('img').first().prop('id')).toBe('image-toy');
        expect(mapStateToProps(initialState).selectedProduct).toEqual(1);
    })

    it('Should render items with no thumbnail without error', () => {
        const props = {
            selectProduct: jest.fn(),
            items: [
                { name: 'toy', thumbnail: null, imageUrl: 'imageUrl', shortDescription: 'desc', variants: [{'name': 'a', 'B': 'b'}] },
            ]
        };
        const wrapper = mount(<Item {...props} />);
        expect(wrapper.find('img').first().prop('src')).toBe(Config.AESOP_URL + 'imageUrl');
        expect(mapStateToProps(initialState).selectedProduct).toEqual(1);
    })

    it('Should render no item without error', () => {
        const wrapper = mount(<Item {...porpsWithNoItems} />);
        expect(wrapper.children().length).toBe(0);
    })

    it('should render without error', () => {
        const wrapper = shallow(<Item debug />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Should item be clicked', () => {
        const wrapper = mount(<Item {...props} />);
        expect(props.selectProduct.mock.calls.length).toBe(0);
        wrapper
            .find('.card-item')
            .first()
            .simulate('click');

        expect(props.selectProduct.mock.calls.length).toBe(1);
    });

});
