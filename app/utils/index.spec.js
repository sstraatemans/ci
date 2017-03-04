/* eslint-env node, jest */
import jsdom from 'jsdom';
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

test('add extra Class', () => {
  document.body.innerHTML =
    '<div id="test" class="segment">test</div>';

    let testEl = document.getElementById("test");
    ci(testEl).addClass("hover");

    expect(testEl.className).toEqual('segment hover');
});

test('check if class exists', () => {
  document.body.innerHTML =
    '<div id="test" class="segment">test</div>';

    let testEl = document.getElementById("test");

    expect(ci(testEl).hasClass("segment")).toEqual(true);
});

test('toggle class', () => {
  document.body.innerHTML =
    '<div id="test" class="segment">test</div>';

    let testEl = document.getElementById("test");
    ci(testEl).toggleClass("segment");
    expect(ci(testEl).hasClass("segment")).toEqual(false);

    ci(testEl).toggleClass("segment");
    expect(ci(testEl).hasClass("segment")).toEqual(true);
});

test('remove class', () => {
  document.body.innerHTML =
    '<div id="test" class="segment">test</div>';

    let testEl = document.getElementById("test");
    expect(ci(testEl).hasClass("segment")).toEqual(true);

    ci(testEl).removeClass("segment");

    expect(ci(testEl).hasClass("segment")).toEqual(false);
});
