/* eslint-env node, jest */
import React from 'react';
import { shallow, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Landing, {UnwrappedLanding} from './Landing';


test('Landing snapshot', () => {
  const component = shallow(<UnwrappedLanding />);
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});

test('check row', () => {
  const component = render(<Landing />);
  expect(component.find('.row').length).toBe(1);
});

test('check if there are panels in the row', () => {
  const component = render(<Landing />);
  expect(component.find('.row .panel').length).toBe(2);
});
