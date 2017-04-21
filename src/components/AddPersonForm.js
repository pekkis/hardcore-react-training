import React from 'react';
import Button from './Button';
import { Field, reduxForm } from 'redux-form';
import { Map, List } from 'immutable';

class AddPersonForm extends React.Component {

  render() {
    const { handleSubmit, valid } = this.props;

    return (
      <form onSubmit={handleSubmit}>

        <div>
          <label>First name</label>
          <Field className="lussutilus" name="firstName" component="input" type="text" />
        </div>

        <div>
          <label>Last name</label>
          <Field name="lastName" component="input" type="text" />
        </div>

        <Button disabled={!valid} type="submit" plump>
          <span>lubs</span> HIRE!
        </Button>

      </form>
    );
  }
};

const validate = fields => {

  return Map(
    List.of('firstName', 'lastName').filter(f => {
      if (!fields[f]) {
        return true;
      }
      return (fields[f].length < 1);
    }).map(field => [field, 'must enter something'])
  ).toJS();
}

export default reduxForm({
  form: 'addPerson',
  validate,
})(AddPersonForm);
