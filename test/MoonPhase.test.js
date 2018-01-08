import React from 'react';
import { mount, shallow } from 'enzyme';
import MoonPhase from '../lib/MoonPhase.js';
import mockData from '../__mocks__/mockData2.js';

let ourData = {};

ourData.currentObservation = mockData.current_observation;
ourData.forecast = mockData.forecast;
ourData.hourlyForecast = mockData.hourly_forecast;
ourData.moonPhase = mockData.moon_phase;

describe('MoonPhase', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MoonPhase phase={ourData} /> );
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have prop data, onBackToHome, and getWeather that are functions', () => {
    expect(wrapper.instance().props.phase).toBeDefined();
    expect(typeof wrapper.instance().props.phase).toEqual('object');
  })

   it('should render an h3 and img', () => {
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
  })
})