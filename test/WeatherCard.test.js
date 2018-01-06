import React from 'react';
import { mount, shallow } from 'enzyme';
import WeatherCard from '../lib/WeatherCard.js';
import mockData from '../__mocks__/mockData2.js';

let tenDayFcst = mockData.forecast.simpleforecast.forecastday[0];
let sevenHrFcst = [];

for (let i = 0; i < 7; i++) {
  sevenHrFcst.push(mockData.hourly_forecast[i]);
};

describe('WeatherCard', () => {
  let wrapper;

  it('should exist', () => {
    wrapper = shallow(<WeatherCard key={0} cardType='hour-card' fcst={sevenHrFcst[0]}/>);

    expect(wrapper).toBeDefined();
  })

  it('should take props', () => {
    //key is not a prop -- why?? Is this a react thing?
    // expect(wrapper.instance().props.key).toEqual(0);
    expect(wrapper.instance().props.cardType).toEqual('hour-card');
    expect(wrapper.instance().props.fcst).toEqual(sevenHrFcst[0]);
  })

  describe('sevenHourCard', () => {

    beforeEach(() => {
      wrapper = shallow(<WeatherCard key={0} cardType='hour-card' fcst={sevenHrFcst[0]}/>);
    })

    it('should render a seven hour card', () => {
      expect(wrapper.find('h3').length).toEqual(2);
      expect(wrapper.find('h3').first().text()).toEqual('Hour of the Beetle');

      expect(wrapper.find('img').length).toEqual(1);
    })
    
  })

  describe('tenDayCard', () => {

    beforeEach(() => {
      wrapper = shallow(<WeatherCard key={0} cardType='TenDay' fcst={tenDayFcst}/>);
    })

    it('should take props', () => {
      expect(wrapper.instance().props.cardType).toEqual('TenDay');
      expect(wrapper.instance().props.fcst).toEqual(tenDayFcst);
    })

    it('should render a ten day card', () => {
      expect(wrapper.find('h3').length).toEqual(3);
      expect(wrapper.find('h3').first().text()).toEqual('Thursday');

      expect(wrapper.find('img').length).toEqual(1);
    })
  })
})