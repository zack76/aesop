import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../../components/NavBar';

describe('NavBar', () => {
    it('should render without error', () => {
        const wrapper = shallow(<NavBar debug />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should have a tag and nav tag inside NavBar', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.find('a').length).toBe(1);
        expect(wrapper.find('nav').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });
});
