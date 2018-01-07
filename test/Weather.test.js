import React from 'react';
import { mount, shallow } from 'enzyme';
import Weather from '../lib/Weather.js';
import mockData from '../__mocks__/mockData2.js';

let currentForecast = mockData.current_observation;
// let currentForecast = mockData;

describe('Weather', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Weather current={currentForecast}/>);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})