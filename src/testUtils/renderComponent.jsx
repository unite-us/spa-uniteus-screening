import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import reducers from '../../reducers';

function renderComponent(Component, props = {}, state = {}) {
  const store = createStore(reducers, state);
  const compInstance = shallow(<Component {...props} />, { context: { store } });

  return compInstance;
}

export default renderComponent;
