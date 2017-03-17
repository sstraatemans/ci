/* eslint-env node, jest */
import React from 'react';
import { mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Footer from './Footer';


// test('Landing snapshot', () => {
//   const component = shallow(<UnwrappedLanding />);
//   const tree = shallowToJson(component);
//   expect(tree).toMatchSnapshot();
// });

test('check content', () => {
  const component = render(<Footer />);
  expect(component.find('footer').length).toBe(1);
});


test('mount called', () => {
  const component = mount(<Footer />);
  expect(component.prototype.componentDidMount.calledOnce).to.equal(true);
});
