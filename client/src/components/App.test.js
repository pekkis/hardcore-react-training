import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <App getPersons={() => {}} persons={[]}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
