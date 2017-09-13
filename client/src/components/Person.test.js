import React from 'react';
import Person from './Person';
import renderer from 'react-test-renderer';

const person = {
  firstName: 'Pekka',
  lastName: 'Naator',
  age: 40,
  gender: 'm',
};

const firePerson = () => {

};

it('renders correctly', () => {
  const tree = renderer.create(
    <Person person={person} firePerson={firePerson} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
