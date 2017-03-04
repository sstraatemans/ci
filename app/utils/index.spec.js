/* eslint-env node, jest */
import jsdom from 'jsdom';
import React from 'react';
import { shallow, render } from 'enzyme';
import {ci} from './';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};

test('add Class', () => {
  document.body.innerHTML =
    '<div id="test">test</div>';

    let testEl = document.getElementById("test");
    ci(testEl).addClass("hover");

    expect(testEl.className).toEqual(' hover');

});
