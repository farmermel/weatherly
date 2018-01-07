import React from 'react';
import { mount, shallow } from 'enzyme';
import Weather from '../lib/Weather.js';
import mockData from '../__mocks__/mockData2.js';

let ourData = {};

ourData.currentObservation = mockData.current_observation;
ourData.forecast = mockData.forecast;
ourData.hourlyForecast = mockData.hourly_forecast;
ourData.moonPhase = mockData.moon_phase;

describe('Weather', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Weather current={ourData}/>);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should start with props', () => {
    expect(wrapper.instance().props.current).toEqual(ourData);
  })

  it('should render section and article elements', () => {
    expect(wrapper.find('article').length).toEqual(3);
    expect(wrapper.find('section').length).toEqual(3);
  })

  it('should render h1, h3, p, img, h4, and h2 children elements', () =>{
    
    wrapper = mount(<Weather current={ourData}/>);
    
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(2);
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('h4').length).toEqual(2);
    expect(wrapper.find('h2').length).toEqual(2);
  })

  it('should render weather props', () => {
    wrapper = mount(<Weather current={ourData}/>);

    expect(wrapper.find('h3').first().text()).toEqual('Now');
    // expect(wrapper.find('h1').first().text()).toEqual('88' + &deg + 'F');
    expect(wrapper.find('p').first().text()).toEqual('Clear');
    expect(wrapper.find('p').last().text()).toEqual('Mostly clear. Lows overnight in the low 60s.');
    // expect(wrapper.find('h2').first().text()).toEqual('88');
    // expect(wrapper.find('h2').last().text()).toEqual('60');
  })
})