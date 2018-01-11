import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../lib/Search.js';
import mockData from '../__mocks__/mockData2.js';

describe('Search', () => {
  let wrapper;
  const mockFunction = jest.fn()
  const otherFakeFunction = () => {
    wrapper.setState({ clicked: true })
  }

  beforeEach(() => {
    wrapper = shallow(<Search getWeather={mockFunction} />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render an input, two divs, and button element', () => {
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(2); 
  })

  it('should not render suggestions if there are none', () => {
    expect(wrapper.find('Suggestion').length).toEqual(0);
  })

  it('should render as many suggestions as are in the suggestions array', () => {
    expect(wrapper.find('Suggestion').length).toEqual(0);

    wrapper.setState({ suggestions: ['Denver, CO', 'Denton, TX']});
    expect(wrapper.find('Suggestion').length).toEqual(2);

    wrapper.setState({ suggestions: ['Denver, CO', 'Denton, TX', 'Dearborn, MI', 'Detroit, MI']});
    expect(wrapper.find('Suggestion').length).toEqual(4);
  })

  it('should render suggestions that match text of suggestions array', () => {
    wrapper = mount(<Search getWeather={mockFunction} />)

    wrapper.setState({ suggestions: ['Denver, CO', 'Denton, TX']});
    expect(wrapper.find('Suggestion').first().text()).toEqual('Denver, CO');

    wrapper.setState({ suggestions: ['Denton, TX', 'Denver, CO']});
    expect(wrapper.find('Suggestion').first().text()).toEqual('Denton, TX');
  })

  it('should make selection when suggestion is clicked', () => {
    wrapper = mount(<Search getWeather={otherFakeFunction} />)

    wrapper.find('button').simulate('click', otherFakeFunction);
    expect(wrapper.state().clicked).toEqual(true)
  })

  it('should a list of suggestions upon input', () => {
    wrapper = mount(<Search getWeather={mockFunction} />)
    const event = {target: {value: "Denv"}};

    wrapper.instance().onType(event);
    expect(wrapper.state('Suggestion')).to.equal('Denver, CO')
    // wrapper.find('input').simulate('change', event);
    // expect(wrapper.find('Suggestions').first()).toEqual('Denver, CO')
  })
})