import React from 'react';
import { mount, shallow } from 'enzyme';
import ProductList from '../../../components/ProductList';
import { Accordion, Card, Button } from 'react-bootstrap';

jest.mock('../../../components/SubCategory', () => 'sub-category')
describe('ProductList', () => {
    const props = {
        products: [
            { name: 'toy', items: ['a', 'b', 'c'] },
            { name: 'paper', items: ['one', 'two', 'three'] },
            { name: 'food', items: ['apple', 'pear', 'orange'] }
        ]
    };

    it('Should render without error', () => {
        const wrapper = mount(<ProductList {...props} />);
        expect(wrapper.find(Accordion).length).toEqual(props.products.length);
        expect(
            wrapper
                .find(Accordion.Toggle)
                .first()
                .text()
        ).toBe('toy');
        expect(
            wrapper
                .find(Card.Body)
                .first()
                .length
        ).toEqual(1);
        expect(wrapper.find('sub-category').first().length).toEqual(1);
        expect(wrapper).toMatchSnapshot();
    })

    it('Should have Accordion.Toggle with "as" is Button', () => {
        const wrapper = shallow(<ProductList {...props} />);
        expect(
            wrapper
                .find(Accordion.Toggle)
                .first()
                .prop('as')
        ).toBe(Button);
        expect(wrapper).toMatchSnapshot();
    });
});
