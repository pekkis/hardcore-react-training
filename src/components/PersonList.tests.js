import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { List } from 'immutable';
import PersonList from './PersonList';
import Person from './Person';
import { createPerson } from '../services/personService';

describe('<PersonList />', () => {

  it('renders a list of persons', () => {
    const persons = List(Array(3).fill().map(createPerson));

    const wrapper = shallow(<PersonList persons={persons} />);

    console.log(wrapper.text());

    // console.log(wrapper);



    expect(wrapper.find(Person)).to.have.length(3);
  });

});
