import React from 'react';
import { mount, shallow } from 'enzyme';
import Suggestion from '../lib/Suggestion.js';

describe('Suggestion', () => {

  let wrapper;
  const mockFunction = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Suggestion place={mockFunction} onSelect={mockFunction} key={mockFunction} />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render a p element', () => {
    expect(wrapper.find('p').length).toEqual(1);
  })

 }) 