import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';

describe('App', () => {
  it('should render without error', () => {
    const wrapper = shallow(<App debug />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a Home component inside App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Connect(Home)').length).toBe(1);
  });
});
