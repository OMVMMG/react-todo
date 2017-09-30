var React = require('react');
var recatDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exists', () => {
    expect(TodoApp).toExist();
  });
});
