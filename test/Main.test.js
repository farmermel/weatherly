import React from 'react';
import { mount, shallow } from 'enzyme';
import Main from '../lib/Main.js';
import mockData from '../__mocks__/mockData2.js';

let ourData = {};

ourData.currentObservation = mockData.current_observation;
ourData.forecast = mockData.forecast;
ourData.hourlyForecast = mockData.hourly_forecast;
ourData.moonPhase = mockData.moon_phase;


let errorData = {};

errorData.currentObservation = null;
errorData.forecast = null;
errorData.hourlyForecast = null;
errorData.moonPhase = null;

describe('Main', () => {

  let wrapper;
  const mockFunction = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<Main data={ourData} onBackToHome={mockFunction} getWeather={mockFunction} /> );
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have prop data, onBackToHome, and getWeather that are functions', () => {
    expect(wrapper.instance().props.data).toBeDefined();
    expect(typeof wrapper.instance().props.data).toEqual('object');

    expect(wrapper.instance().props.onBackToHome).toBeDefined();
    expect(typeof wrapper.instance().props.onBackToHome).toEqual('function');
    
    expect(wrapper.instance().props.getWeather).toBeDefined();
    expect(typeof wrapper.instance().props.getWeather).toEqual('function');
  })

  it('should render button, h1, h3, and Search in the header', () => {
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('button').text()).toEqual('Back to Home');
    
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h1').text()).toEqual('Tempestarii');
    
    expect(wrapper.find('h3').length).toEqual(6);
    expect(wrapper.find('h3').first().text()).toEqual('Weather Divination for the Modern Witch');

    expect(wrapper.find('Search').length).toEqual(1);
    expect(wrapper.find('Search').text()).toEqual('<Search />');
  })

  it('should render city, date, Weather, Seven Hour forecast, tenDay forecast, and moonPhase', () => {
    wrapper = mount(<Main data={ourData} onBackToHome={mockFunction} getWeather={mockFunction} />);
    
    expect(wrapper.find('h2').length).toEqual(6);
    expect(wrapper.find('h2').first().text()).toEqual('Co, Guinea-Bissau');
    expect(wrapper.find('h2').last().text()).toEqual('Moon Phase Divination');
    expect(wrapper.find('h3').length).toEqual(110);
    expect(wrapper.find('h3').last().text()).toEqual('Waning Gibbous');
    expect(wrapper.find('Weather').length).toEqual(1);
    expect(wrapper.find('.seven-hr').length).toEqual(1);
    expect(wrapper.find('.seven-hr WeatherCard').length).toEqual(36);
    expect(wrapper.find('.ten-day-wrapper').length).toEqual(1);
    expect(wrapper.find('.ten-day-wrapper WeatherCard').length).toEqual(10);
    expect(wrapper.find('MoonPhase').length).toEqual(1);
  })

  it('should render city, date, Weather, Seven Hour forecast, tenDay forecast, and moonPhase', () => {
    wrapper = mount(<Main data={errorData} onBackToHome={mockFunction} getWeather={mockFunction} />);
    
    expect(wrapper.find('h3').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);    
  })

})
