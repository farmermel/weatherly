import React from 'react';
import { mount, shallow } from 'enzyme';
import StartPage from '../lib/StartPage.js';
import mockData from '../__mocks__/mockData2.js';

describe('StartPage', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StartPage onInitialSearch="Denver, CO" onType="Denver, CO" />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render h1, h3, and Search component', () => {
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('Search')).toEqual(1);
  })
})
