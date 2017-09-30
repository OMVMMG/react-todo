var React = require('react');
var recatDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exists', () => {
    expect(Todo).toExist();
  });
});
