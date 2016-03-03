jest.dontMock('../app')

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const App = require('../app').default;

describe('App', () => {

  it('greets the user', () => {
    var container = TestUtils.renderIntoDocument(
      React.createElement(App)
    );
    var node = ReactDOM.findDOMNode(container);

    expect(node.textContent).toBeTruthy();
  });

});
