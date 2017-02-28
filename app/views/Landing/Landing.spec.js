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

// test('Laning should render word landing', () => {
//   const component = render(<Landing />);
//   expect(component.find('.landing').text()).toEqual('landing');
// });
