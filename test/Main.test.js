import React from 'react';
import { mount, shallow } from 'enzyme';
import Main from '../lib/Main.js';

describe('Main', () => {

  let wrapper;
  const mockFunction = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Main data={mockFunction} onInitialSearch={mockFunction} onType={mockFunction} onBackToHome={mockFunction} /> );
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have prop data, onInitialSearch, onType and onBackToHome that are functions', () => {
    expect(wrapper.instance().props.data).toBeDefined();
    expect(typeof wrapper.instance().props.data).toEqual('function');
    
    expect(wrapper.instance().props.onInitialSearch).toBeDefined();
    expect(typeof wrapper.instance().props.onInitialSearch).toEqual('function');
    
    expect(wrapper.instance().props.onType).toBeDefined();
    expect(typeof wrapper.instance().props.onType).toEqual('function');

    expect(wrapper.instance().props.onBackToHome).toBeDefined();
    expect(typeof wrapper.instance().props.onBackToHome).toEqual('function');
  })

  it('should render button, h1, and h3 in the header', () => {
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('button').text()).toEqual('Back to Home');
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h1').text()).toEqual('Tempestarii');
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('h3').text()).toEqual('Weather Divination for the Modern Witch');
  })

})
