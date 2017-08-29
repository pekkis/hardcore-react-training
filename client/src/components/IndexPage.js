import React from 'react';
import PersonList from './PersonList';

const IndexPage = props => {

  const { persons } = props;

  const oldPeoples = persons.filter(p => p.age > 30);
  const youngPeoples = persons.filter(p => p.age <= 30);

  return (




    <div>



      <h2>Good Peoples</h2>

      <PersonList persons={youngPeoples} />

      <h2>Bad Peoples</h2>

      <PersonList persons={oldPeoples} />


    </div>
  )

};

export default IndexPage;
