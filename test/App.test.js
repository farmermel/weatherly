import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../lib/App.js';
import mockData from '../__mocks__/mockData2.js';

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render the start page by default', () => {
    expect(wrapper.find('StartPage').length).toEqual(1);
  })

  it('should render the main page when state.pageToggle is true', () => {
    expect(wrapper.find('Main').length).toEqual(0);
    
    wrapper.setState({pageToggle: true});
//if lag use wrapper.update or .then or asynch
    expect(wrapper.find('Main').length).toEqual(1);
  })

})