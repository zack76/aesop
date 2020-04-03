import React from 'react';
import { mount, shallow } from 'enzyme';
import SubCategory from '../../../components/SubCategory';
import { Accordion, Button } from 'react-bootstrap';

jest.mock('../../../components/Item', () => 'item-list')
describe('SubCategory', () => {
    const props = {
        subcategories: [
            { name: 'toy', items: [
                    { name: 1, price: 2, variants: [ {a:1, b: 2}]},
                    { name: 2, price: 2, variants: [ {a:1, b: 2}]},
                    { name: 3, price: 2, variants: [ {a:1, b: 2}]}
                ] },
        ]
    };

    it('Should render without error', () => {
        const wrapper = mount(<SubCategory {...props} />);
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find(Accordion).length).toEqual(props.subcategories.length);
        expect(
            wrapper
                .find(Accordion.Toggle)
                .first()
                .text()
        ).toBe('toy');
        expect(
            wrapper
                .find('item-list')
                .length
        ).toEqual(1);
    })

    it('Should render item with no price without error', () => {
        const props = {
            subcategories: [
                { name: 'toy', items: [
                        { name: 'toy', items: [
                                { name: 1, price: 2, variants: [ {a:1, b: 2}]},
                                { name: 2, price: 2, variants: [ {a:1, b: 2}]},
                                { name: 3, price: 2, variants: [ {a:1, b: 2}]}
                            ] }
                    ] },
            ]
        };
        const wrapper = mount(<SubCategory {...props} />);
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find(Accordion).length).toEqual(2);
    })

    it('Should have Accordion.Toggle with "as" is Button', () => {
        const wrapper = shallow(<SubCategory {...props} />);
        expect(
            wrapper
                .find(Accordion.Toggle)
                .first()
                .prop('as')
        ).toBe(Button);
        expect(wrapper).toMatchSnapshot();
    });
});
