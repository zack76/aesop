import React from 'react';
import { mount } from 'enzyme';
import  LeftPaneContent  from '../../../components/LeftPaneContent';
import {Accordion} from "react-bootstrap";


describe('LeftPaneContent', () => {

    it('Should render key with name without error', () => {
        const props = {
            product: { name: 'toy', variants: [{name: 'a', 'B': 'b'}, {name: 'b', 'B': '2b'}] },
        };
        const wrapper = mount(<LeftPaneContent {...props} />);
        expect(wrapper.find(Accordion).length).toEqual(2);
        expect(wrapper.find(Accordion.Toggle).first().text()).toEqual('a');
        expect(wrapper.find(Accordion.Collapse).first().prop('eventKey')).toEqual('variant0');
    })


    it('Should render key with variant is boolean without error', () => {
        const props = {
            product: { name: 'toy', variants: [{'type': 'type', sku: 'sku'}, {sku: 'b', 'B': '2b'}] },
        };
        const wrapper = mount(<LeftPaneContent {...props} />);
        expect(wrapper.find('span').first().text()).toEqual('type');

    })

    it('Should render key with variant is not boolean without error', () => {
        const props = {
            product: { name: 'toy', variants: [{'type': true, sku: 'sku'}, {sku: 'b', 'B': '2b'}] },
        };
        const wrapper = mount(<LeftPaneContent {...props} />);
        expect(wrapper.find('span').first().text()).toEqual('true');

    })

    it('Should render no product without error', () => {
        const props = {
            product: null
        };
        const wrapper = mount(<LeftPaneContent {...props} />);
        expect(wrapper.find(Accordion).length).toEqual(0);
        expect(wrapper.children().length).toBe(0);
    })
    //
});
