import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search.js';
import mockData from '../__mocks__/mockData2.js';


describe('Search', () => {
  let wrapper;
  const mockFunction = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Search onInitialSearch={mockFunction} onType={mockFunction} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render an input and button element', () => {
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  })

  it('should default to an empty string', () => {
    expect(wrapper.state()).toEqual('');
  })
})