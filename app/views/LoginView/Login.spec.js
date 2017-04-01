/* eslint-env node, jest */
import React from 'react';
import { shallow, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import LoginView, {UnwrappedLoginView} from './LoginView';


test('Login snapshot', () => {
  const component = shallow(<UnwrappedLoginView />);
  const tree = shallowToJson(component);
  expect(tree).toMatchSnapshot();
});
