import React from 'react';
import { mount, shallow } from 'enzyme';
import StartPage from '../lib/StartPage.js';

describe('StartPage', () => {

  let wrapper;
  const mockFunction = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<StartPage onInitialSearch={mockFunction} onType={mockFunction} />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render h1, h3, and Search component', () => {
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h1').text()).toEqual('Tempestarii');
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('h3').text()).toEqual('Weather Divination for the Modern Witch');
  })

  it('should have prop onInitialSearch and onType that are functions', () => {
    expect(wrapper.instance().props.onInitialSearch).toBeDefined();
    expect(typeof wrapper.instance().props.onInitialSearch).toEqual('function');

    expect(wrapper.instance().props.onType).toBeDefined();
    expect(typeof wrapper.instance().props.onType).toEqual('function');
  })

  it('should render search', () => {
    wrapper = mount(<StartPage onInitialSearch={mockFunction} onType={mockFunction} />);
    expect(wrapper.find('Search').length).toEqual(1);
  })
})
