import React from 'react';
import PersonList from './PersonList';
import renderer from 'react-test-renderer';
import { List } from 'immutable';

const persons = List.of({
  id: 'feikki-id',
  firstName: 'Pekka',
  lastName: 'Naator',
  age: 40,
  gender: 'm',
});

const firePerson = () => {

};

it('renders correctly', () => {
  const tree = renderer.create(
    <PersonList persons={persons} firePerson={firePerson} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
