import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { List } from 'immutable';
import Example from './Example';
import sinon from 'sinon';

describe('<Example />', () => {

  it('renders a button', () => {
    const setExample = sinon.spy();
    const wrapper = mount(
      <Example example="lubs libs" setExample={setExample} />
    );
    wrapper.find('button').simulate('click');
    expect(setExample).to.have.property('callCount', 1);
  });

});
