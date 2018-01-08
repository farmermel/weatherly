import React from 'react';
import { mount, shallow } from 'enzyme';
import StartPage from '../lib/StartPage.js';
import mockData from '../__mocks__/mockData2.js';

describe('StartPage', () => {

  let wrapper;
  const mockFunction = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<StartPage data={mockData} getWeather={mockFunction} />);
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

  it('should have prop data and getWeather that are functions', () => {
    expect(wrapper.instance().props.data).toBeDefined();
    expect(typeof wrapper.instance().props.data).toEqual('object');

    expect(wrapper.instance().props.getWeather).toBeDefined();
    expect(typeof wrapper.instance().props.getWeather).toEqual('function');
  })

  it('should render search', () => {
    wrapper = mount(<StartPage onInitialSearch={mockFunction} onType={mockFunction} />);
    expect(wrapper.find('Search').length).toEqual(1);
  })
})
